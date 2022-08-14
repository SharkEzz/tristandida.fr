import type Image from './image';

type Project = {
  id: string;
  year: number;
  name: string;
  description: string;
  tags: string[];
  image: Image;
  link?: string;
  created_at: string;
};

export default Project;
