import { NextSeo } from 'next-seo';
import { Container } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import ReactMarkdown from 'react-markdown';
import ArticleWrapper from '../../components/Blog/ArticleWrapper';
import Hero from '../../components/Hero';
import PageLayout from '../../components/PageLayout';
import Article from '../../models/Article';
import getDirectus from '../../utils/getDirectus';

export default function BlogArticle({ article }: { article: Article }) {
  return (
    <PageLayout>
      <NextSeo title={`Tristan DIDA | Blog - ${article.title}`} description={article.description} />
      <Hero title={article.title} subtitle={article.description} />
      <Container maxW="container.md" py={8}>
        <ArticleWrapper>
          <ReactMarkdown>{article.content}</ReactMarkdown>
        </ArticleWrapper>
      </Container>
    </PageLayout>
  );
}

export async function getStaticPaths() {
  const directus = getDirectus();

  const posts = await directus.items('article').readByQuery({
    fields: ['id'],
    filter: {
      status: {
        _eq: 'published',
      },
    },
    limit: -1,
  });

  return {
    fallback: 'blocking',
    paths: posts.data?.map((post) => ({ params: { id: String(post.id) } })),
  };
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const id = ctx.params?.id as string | null;

  if (!id || Number.isNaN(Number(id))) {
    return {
      notFound: true,
    };
  }

  const directus = getDirectus();

  let article: Article | null = null;
  try {
    article = await directus.items('article').readOne(id, {
      fields: ['*', 'image.title', 'image.id', 'image.description'],
    });

    if (!article) {
      return {
        notFound: true,
      };
    }
  } catch {
    // If the article doesn't exist, return a 404
    return {
      notFound: true,
    };
  }

  return {
    props: {
      article,
    },
    revalidate: 86400, // each day
  };
};
