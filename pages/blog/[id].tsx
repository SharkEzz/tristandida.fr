import { Container } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { GetStaticProps } from 'next';
import ReactMarkdown from 'react-markdown';
import Hero from '../../components/Hero';
import PageLayout from '../../components/PageLayout';
import Article from '../../models/Article';
import getDirectus from '../../utils/getDirectus';

const ArticleWrapper = styled.article`
  ul {
    margin-bottom: 1rem;
  }

  h1 {
    font-size: 42px;
    font-weight: 700;
    margin-bottom: 1rem;
  }
  h2 {
    font-size: 36px;
    font-weight: 700;
    margin-bottom: 1rem;
  }
  h3 {
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 1rem;
  }
  h4 {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 1rem;
  }
  h5 {
    font-size: 18px;
    margin-bottom: 1rem;
  }
  h6 {
    font-size: 14px;
    margin-bottom: 1rem;
  }
  p {
    font-size: 18px;
    margin-bottom: 1rem;
  }
`;

export default function BlogArticle({ article }: { article: Article }) {
  return (
    <PageLayout>
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
