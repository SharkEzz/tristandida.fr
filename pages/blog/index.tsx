import { Box, Container, Text, VStack } from '@chakra-ui/react';
import Head from 'next/head';
import BlogItem from '../../components/BlogItem';
import Hero from '../../components/Hero';
import PageLayout from '../../components/PageLayout';
import DirectusCollections from '../../models';
import getDirectus from '../../utils/getDirectus';

export default function Blog({ articles }: { articles: DirectusCollections['article'][] }) {
  return (
    <PageLayout>
      <Head>
        <title>Tristan DIDA | Blog</title>
        <meta name="description" content="Tristan DIDA's blog" />
      </Head>
      <Hero
        title="Blog"
        subtitle="Discover articles on various topics, ongoing projects, technology discoveries, and more!"
      />
      <Box as="main" py={8}>
        <Container maxW="container.md">
          <VStack align={['center', null, 'flex-start']} spacing={6}>
            {articles.length === 0 ? (
              <Text alignSelf="center">No articles found for now, check back later!</Text>
            ) : (
              articles.map((article) => (
                <BlogItem article={article} key={`article_${article.id}`} />
              ))
            )}
          </VStack>
        </Container>
      </Box>
    </PageLayout>
  );
}

export async function getStaticProps() {
  const directus = getDirectus();

  const articles = await directus.items('article').readByQuery({
    fields: ['*', 'image.title', 'image.id', 'image.description'],
    filter: {
      status: {
        _eq: 'published',
      },
    },
    sort: ['-date_created'],
  });

  return {
    props: {
      articles: articles.data,
    },
    revalidate: 86400, // each day
  };
}
