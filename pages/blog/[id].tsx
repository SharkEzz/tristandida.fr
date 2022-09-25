import { NextSeo } from 'next-seo';
import { Container } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import { marked } from 'marked';
import hljs from 'highlight.js';
import ArticleWrapper from '../../components/Blog/ArticleWrapper';
import Hero from '../../components/Hero';
import PageLayout from '../../components/PageLayout';
import Article from '../../models/Article';
import getDirectus from '../../utils/getDirectus';

export default function BlogArticle({
  article,
  contentHtml,
}: {
  article: Article;
  contentHtml: string;
}) {
  return (
    <PageLayout>
      <NextSeo title={`Tristan DIDA | Blog - ${article.title}`} description={article.description} />
      <Hero title={article.title} subtitle={article.description} />
      <Container maxW="container.md" py={8}>
        <ArticleWrapper dangerouslySetInnerHTML={{ __html: contentHtml }} />
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

  const renderer = {
    image(href: string, title: string, text: string) {
      return `<img src="${href}?key=article-image" title="${title ?? ''}"  alt="${text ?? ''}" />`;
    },
  };

  marked.use({ renderer });

  return {
    props: {
      article,
      contentHtml: marked(article.content, {
        highlight: (code, lang) => {
          if (!lang || lang === '') {
            return code;
          }
          const language = hljs.getLanguage(lang) ? lang : 'plaintext';
          return hljs.highlight(code, {
            language,
          }).value;
        },
      }),
    },
    revalidate: 86400, // each day
  };
};
