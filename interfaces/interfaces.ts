export interface Page {
  id: number;
  date: string;
  slug: string;
  acf: any;
}

export interface Media {
  id: number;
  date: string;
  slug: string;
  title: {
    rendered: string;
  };
  alt_text: string;
  caption: object;
  source_url: string;
  post: number;
}

export interface Category {
  id: number;
  count: number;
  name: string;
  slug: string;
  parent: number;
}

export interface Post {
  id: number;
  date: string;
  slug: string;
  link: string;
  title: {
    rendered: string;
  };
  acf: any;
  categories: [number];
}

export interface Article<Post> {
  acf: {
    reading_time: string;
    article_main_image: number;
    title_additional_text: string;
  };
}

export interface ServerData {
  dataPages: [Page];
  dataMedia: [Media];
  dataPosts: [Post];
  dataCategories: [Category];
  dataMenuBlog: Menu;
  dataMenuHeader: Menu;
  dataMenuCatalog: Menu;
}

export interface ServerSideProps {
  serverData: ServerData;
}

export interface ArticlesProps {
  posts: Post[];
  tileMaxCount: number;
}

export interface MenuItem {
  ID: number;
  title: string;
  slug: string;
  url: string;
}

export interface Menu {
  term_id: number;
  name: string;
  slug: string;
  count: 5;
  items: [MenuItem];
}
