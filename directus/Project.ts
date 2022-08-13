import type Image from './image';

type Project = {
  id: string;
  year: number;
  name: string;
  description: string;
  tags: string[];
  category: {
    name: string;
  };
  image: Image;
  link?: string;
};

export default Project;
