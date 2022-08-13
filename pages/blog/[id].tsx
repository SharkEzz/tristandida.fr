import { GetStaticProps } from 'next';
import Hero from '../../components/Hero';
import PageLayout from '../../components/PageLayout';
import Article from '../../models/Article';
import getDirectus from '../../utils/getDirectus';

export default function BlogArticle({ article }: { article: Article }) {
  return (
    <PageLayout>
      <Hero title={article.title} subtitle={article.description} />
    </PageLayout>
  );
}

export async function getStaticPaths() {
  const directus = getDirectus();

  const posts = await directus.items('article').readByQuery({
    fields: ['id'],
  });

  return {
    fallback: false,
    paths: posts.data?.map((post) => ({ params: { id: String(post.id) } })),
  };
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const id = Number(ctx.params?.id);

  const directus = getDirectus();

  const article = await directus.items('article').readOne(id, {
    fields: ['*', 'image.title', 'image.id', 'image.description'],
  });

  return {
    props: {
      article,
    },
    revalidate: 86400, // each day
  };
};
