import { Grid, Heading, Image, Text, VStack } from '@chakra-ui/react';
import type Article from '../../models/Article';
import formatDate from '../../utils/formatDate';
import getDirectusImagePath from '../../utils/getDirectusImagePath';
import Link from '../Link';

export default function BlogItem({ article }: { article: Article }) {
  return (
    <Grid as="article" templateColumns="160px 1fr" gap={6}>
      <Link href={`/blog/${article.id}`}>
        <Image
          src={getDirectusImagePath(article.image.id, 'medium')}
          title={article.image.title}
          alt={article.image.description}
          width="100%"
          loading="lazy"
        />
      </Link>
      <VStack align="flex-start" spacing={4}>
        <Link href={`/blog/${article.id}`}>
          <Heading as="h2">{article.title}</Heading>
        </Link>
        <Text textTransform="uppercase" variant="muted">
          {formatDate(article.date_created)}
        </Text>
        <Text>
          {article.description.length > 300
            ? `${article.description.slice(0, 300)}...`
            : article.description}
        </Text>
      </VStack>
    </Grid>
  );
}
