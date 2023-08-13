import { NextSeo } from 'next-seo';
import { Container, useColorModeValue } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import { RendererObject, Marked } from 'marked';
import hljs from 'highlight.js';
import { markedHighlight } from 'marked-highlight';
import ArticleWrapper from '../../components/Blog/ArticleWrapper';
import Hero from '../../components/Hero';
import PageLayout from '../../components/PageLayout';
import Article from '../../models/Article';
import getDirectus from '../../utils/getDirectus';

export default function BlogArticle({ article, contentHtml }: { article: Article; contentHtml: string }) {
  const color = useColorModeValue('inherit', 'white');
  const codeColor = useColorModeValue(undefined, 'gray.400');
  const preBgColor = useColorModeValue('gray.100', 'gray.900');

  return (
    <PageLayout>
      <NextSeo
        title={`Tristan DIDA | Blog - ${article.title}`}
        description={article.description}
        openGraph={{
          article: {
            modifiedTime: article.date_updated,
            publishedTime: article.date_created,
          },
          description: article.description,
          title: article.title,
          type: 'article',
          url: `https://tristandida.fr/blog/${article.id}`,
        }}
      />
      <Hero title={article.title} subtitle={article.description} />
      <Container maxW="container.md" py={8}>
        <ArticleWrapper
          dangerouslySetInnerHTML={{ __html: contentHtml }}
          color={color}
          sx={{
            code: {
              color: codeColor,
            },
            'p > code': {
              bg: preBgColor,
              color: codeColor,
            },
          }}
        />
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
    paths: posts.data?.map((post) => ({ params: { id: String(post?.id) } })),
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

  let article: Article | null | undefined = null;
  try {
    article = await directus.items('article').readOne(id);

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

  const renderer: RendererObject = {
    image(href: string, title: string | null, text: string) {
      return `<img src="${href}?key=article-image" title="${title ?? ''}"  alt="${text ?? ''}" />`;
    },
  };

  const marked = new Marked(
    markedHighlight({
      highlight(code, lang) {
        const language = hljs.getLanguage(lang) ? lang : 'plaintext';
        return hljs.highlight(code, { language }).value;
      },
      langPrefix: 'hljs language-',
    }),
  );

  marked.use({ renderer });

  return {
    props: {
      article,
      contentHtml: marked.parse(article.content),
    },
    revalidate: 86400, // each day
  };
};
