import { chakra, Container } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import ReactMarkdown from 'react-markdown';
import Hero from '../../components/Hero';
import PageLayout from '../../components/PageLayout';
import Article from '../../models/Article';
import getDirectus from '../../utils/getDirectus';

const ArticleWrapper = chakra('article', {
  baseStyle: {
    a: {
      color: 'teal.300',
    },
    code: {
      bg: 'gray.200',
      fontSize: 16,
    },
    h2: {
      fontSize: '36px',
      fontWeight: 700,
      my: 4,
      width: 'fit-content',
    },
    h3: {
      fontSize: '30px',
      fontWeight: 700,
      my: 4,
    },
    h4: {
      fontSize: '24px',
      fontWeight: 700,
      my: 4,
    },
    h5: {
      fontSize: '18px',
      my: 4,
    },
    h6: {
      fontSize: '14px',
      my: 4,
    },
    img: {
      mx: 'auto',
      my: 8,
    },
    p: {
      fontSize: '18px',
      my: 2,
      textAlign: 'justify',
    },
    ul: {
      my: 2,
    },
  },
});

export default function BlogArticle({ article }: { article: Article }) {
  return (
    <PageLayout>
      <Head>
        <title>{`Tristan DIDA | Blog - ${article.title}`}</title>
        <meta name="description" content={article.description} />
      </Head>
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

  let article = null;
  try {
    article = await directus.items('article').readOne(id, {
      fields: ['*', 'image.title', 'image.id', 'image.description'],
    });
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
