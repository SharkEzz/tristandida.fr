import type Image from './image';

type Article = {
  id: number;
  title: string;
  description: string;
  image: Image;
  content: string;
  date_updated: string;
  date_created: string;
  status: string;
};

export default Article;
