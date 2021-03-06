import { FormEventHandler, MouseEventHandler, ReactElement } from 'react';
import { pairsFormattedPosts } from '../types/types';

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
  postName?: string;
  dataPages?: [Page];
  dataMedia?: [Media];
  dataPosts?: [Post];
  dataCategories?: [Category];
  dataMenuBlog?: Menu;
  dataMenuHeader?: Menu;
  dataMenuCatalog?: Menu;
}

export interface ServerSideProps {
  serverData: ServerData;
}

export interface ArticlesProps {
  list: pairsFormattedPosts;
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

export interface TopSearchProps {
  placeholder?: string;
  searchHandler?: FormEventHandler;
}

export interface FilterItemProps {
  name?: string;
  showMore?: string | boolean;
  children?: ReactElement[] | [ReactElement];
  elementsType?: 'radio' | 'checkbox';
}

export interface Location {
  id: string;
  name: string;
  list: string[];
}

export interface FilterElementProps {
  name: string;
  id: string;
  elementType?: 'radio' | 'checkbox';
  location?: Location | false;
  text: string;
}

export type QuestionVariants = {
  text: string;
  letter: string;
  type: 'radio' | 'checkbox';
};

export interface QuestionProps {
  clickHandler: MouseEventHandler;
  variants: QuestionVariants[];
  text: string;
  number: number;
}

export interface PopupVideo {
  state: boolean;
  link: string;
}

export interface PopupContextProps {
  popupVideo: PopupVideo;
  setPopupVideo: () => void;
}
