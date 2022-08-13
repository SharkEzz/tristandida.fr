import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  if (req.query.secret !== process.env.REVALIDATE_TOKEN) {
    return res.status(401).json({ message: 'invalid token' });
  }

  try {
    await res.revalidate('/');
    return res.json({ ok: true });
  } catch (err) {
    return res.status(500).json({ message: 'Error revalidating' });
  }
}
