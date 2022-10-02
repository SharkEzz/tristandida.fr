/* eslint-disable no-console */
import type { NextApiRequest, NextApiResponse } from 'next';
import getDirectus from '../../utils/getDirectus';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  if (req.query.secret !== process.env.REVALIDATE_TOKEN) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  const directus = getDirectus();

  const articles = await directus.items('article').readByQuery({
    fields: ['id'],
    filter: {
      status: {
        _eq: 'published',
      },
    },
    limit: -1,
  });

  try {
    await res.revalidate('/');
    await res.revalidate('/blog');

    const waitingArticles: Promise<void>[] = [];
    articles.data?.forEach((article) => {
      waitingArticles.push(res.revalidate(`/blog/${article.id}`));
    });

    await Promise.all(waitingArticles);

    return res.json({ ok: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Error revalidating' });
  }
}
