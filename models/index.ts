import type AboutMe from './AboutMe';
import type Article from './Article';
import type Experience from './Experience';
import type Header from './Header';
import type Project from './Project';

type DirectusCollections = {
  header: Header;
  about_me: AboutMe;
  projects: Project;
  experience: Experience;
  article: Article;
};

export default DirectusCollections;
