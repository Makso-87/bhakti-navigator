import { FormEventHandler, MouseEventHandler, ReactElement } from 'react';
import { pairsFormattedPosts } from '../types/types';

export interface User {
  email: string;
  firstName: string;
  lastName: string;
  avatar: string;
  token: string;
  city: string;
  age: string;
  inIskconSince: string;
  spiritualName: string;
}

export interface Page {
  id: number;
  title: string;
  date: string;
  slug: string;
  acf: any;
}

export interface HeaderContentProps {
  logo?: boolean;
}

export interface Media {
  id: number;
  date: string;
  slug: string;
  title: string;
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

export interface Nodes {
  nodes: Post[];
}

export interface Post {
  id?: number;
  date?: string;
  slug?: string;
  link?: string;
  title?: string;
  acf?: any;
  faqACF?: any;
  themeACF?: any;
  recordACF?: any;
  courseACF?: any;
  serviceACF?: any;
  articleACF?: any;
  projectACF?: any;
  teacherACF?: any;
  materialACF?: any;
  bhaktiLevelACF?: any;
  courseCategoryACF?: any;
  courseProgramItemACF?: any;
  categories?: Nodes;
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
  dataPages?: Page[];
  dataMedia?: Media[];
  dataPosts?: {
    faq?: Post[];
    courses?: Post[];
    records?: Post[];
    teachers?: Post[];
    projects?: Post[];
    articles?: Post[];
    materials?: Post[];
    filters?: Post[];
  };
  dataPost?: Post;
  dataCategories?: Category[];
  dataMenuBlog?: Menu;
  dataMenuHeader?: Menu;
  dataMenuCatalog?: Menu;
  error?: any;
}

export interface ServerSideProps {
  serverData: ServerData;
}

export interface ArticlesProps {
  showMore?: boolean;
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
  searchHandler?: (string) => void;
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
  changeHandler: (event, type: string) => void;
  // setClearValue: (value: boolean) => void;
  // clearValue?: boolean;
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

export interface PopupQuestionForm {
  state: boolean;
}

export interface PopupContextProps {
  popupVideo?: PopupVideo;
  popupQuestionForm?: PopupQuestionForm;
  setPopupVideo?: ({ state, link, ref }: { state: any; link: string; ref: any }) => void;
  setPopupQuestionForm?: ({ state, ref }) => void;
}
