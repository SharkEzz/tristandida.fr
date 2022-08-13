import type Image from './image';

type Experience = {
  id: number;
  year: number;
  job: string;
  title: string;
  description: string;
  image: Image;
  tags: string[];
};

export default Experience;
