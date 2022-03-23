export type homePageData = {
  aboutShort: string;
  selectedProjects: selectedProject[];
  moreWorksDesc: string;
  moreWorks: moreWork[];
  ndaDisclaimer: string;
};

export type selectedProject = {
  image: string;
  slug: string;
  tags: string[];
  title: string;
};

export type moreWork = {
  image: string;
  url: string;
  description: string;
  title: string;
};

export type aboutPageData = {
  intro: string;
  description: string;
  skill: string[];
};

export type project = {
  title: string;
  image: string;
  description: string;
  company: string;
  link: string;
  date: string;
  stack: string[];
  textBlock: Array<{
    category: string;
    body: string;
  }>;
};
