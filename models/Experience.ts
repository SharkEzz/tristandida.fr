import type Image from './image';

type Experience = {
  id: number;
  from: string;
  to?: string;
  job: string;
  title: string;
  description: string;
  image: Image;
  tags: string[];
};

export default Experience;
