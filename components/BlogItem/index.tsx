import { Box, Heading, Text, useColorModeValue, VStack } from '@chakra-ui/react';
import type Article from '../../models/Article';
import formatDate from '../../utils/formatDate';
import Link from '../Link';

export default function BlogItem({ article }: { article: Article }) {
  const color = useColorModeValue('inherit', 'white');

  return (
    <Box as="article" pb={6} borderBottom="1px" borderBottomColor="gray.300" w="full" color={color}>
      <VStack align="flex-start" spacing={4}>
        <Link href={`/blog/${article.id}`}>
          <Heading as="h2" color="inherit">
            {article.title}
          </Heading>
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
