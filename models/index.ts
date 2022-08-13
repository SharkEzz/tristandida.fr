import type AboutMe from './AboutMe';
import Experience from './Experience';
import type Header from './Header';
import type Project from './Project';

type DirectusCollections = {
  header: Header;
  about_me: AboutMe;
  projects: Project;
  experience: Experience;
};

export default DirectusCollections;
