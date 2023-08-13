import { Box, Container, Text, VStack } from '@chakra-ui/react';
import { NextSeo } from 'next-seo';
import BlogItem from '../../components/BlogItem';
import Hero from '../../components/Hero';
import PageLayout from '../../components/PageLayout';
import DirectusCollections from '../../models';
import getDirectus from '../../utils/getDirectus';

export default function Blog({ articles }: { articles: DirectusCollections['article'][] }) {
  return (
    <PageLayout>
      <NextSeo title="Tristan DIDA | Blog" description="Tristan DIDA's blog" />
      <Hero
        title="Blog"
        subtitle="Discover articles on various topics, ongoing projects, technology discoveries, and more!"
      />
      <Box as="main" py={16}>
        <Container maxW="container.md">
          <VStack align={['center', null, 'flex-start']} spacing={6}>
            {articles.length === 0 ? (
              <Text alignSelf="center">No articles found for now, check back later!</Text>
            ) : (
              articles.map((article) => <BlogItem article={article} key={`article_${article.id}`} />)
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
