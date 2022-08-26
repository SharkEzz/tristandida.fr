import { Box, Heading, Text, VStack } from '@chakra-ui/react';
import type Article from '../../models/Article';
import formatDate from '../../utils/formatDate';
import Link from '../Link';

export default function BlogItem({ article }: { article: Article }) {
  return (
    <Box as="article" pb={6} borderBottom="1px" borderBottomColor="gray.300" w="full">
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
    </Box>
  );
}
