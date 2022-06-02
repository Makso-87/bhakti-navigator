import { Category, Media, Page, Post } from '../interfaces/interfaces';
import { pairsFormattedPosts } from '../types/types';

export const getPageData = (data: Page[], pageName: string): Page => {
  const [page]: Page[] = data.filter((item: Page) => item.slug === pageName);
  return page;
};

export const getMediaData = (mediaData: Media[], imgId: number): Media => {
  const [media]: Media[] = mediaData.filter((item: Media) => item.id === imgId);
  return media;
};

export const getCategoryData = (categoriesData: Category[], categoryName): Category => {
  const [category]: Category[] = categoriesData.filter(
    (item: Category) => item.slug === categoryName
  );

  return category;
};

export const getPostsList = (postsData: Post[], categoryId): Post[] => {
  return postsData.filter((item: Post) => {
    const {
      title: { rendered },
      slug,
      categories,
    } = item;
    return item.categories.includes(categoryId);
  });
};

export const getFormattedPosts = (posts: Post[]): pairsFormattedPosts => {
  const formatted = [];
  let countFirstLevel = 0;

  for (let i = 0; i < posts.length; i += 1) {
    if (i % 2 == 0) {
      formatted.push([posts[i]]);
    } else {
      formatted[countFirstLevel].push(posts[i]);
      countFirstLevel = countFirstLevel + 1;
    }
  }

  return formatted;
};

export const getLink = (link: string) => {
  const url = new URL(link);
  return url.pathname.replace('/bhakti-navigator', '');
};

export const throttle = (callee, timeout) => {
  let timer = null;

  return function perform(...args) {
    if (timer) return;

    timer = setTimeout(() => {
      callee(...args);

      clearTimeout(timer);
      timer = null;
    }, timeout);
  };
};
