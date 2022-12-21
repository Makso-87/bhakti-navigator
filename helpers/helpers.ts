import { Category, Media, Page, Post } from '../interfaces/interfaces';
import { pairsFormattedPosts } from '../types/types';
import config from '../config/config';
import urlDecoding from './urlDecoding';
import apiFetch from '@wordpress/api-fetch';
import has from 'lodash/has';
import camelCase from 'lodash/camelCase';

export const getPageData = (data: Page[], pageName: string): Page => {
  const [page]: Page[] = data.filter((item: Page) => item.slug === pageName);
  return page;
};

export const getMediaData = (mediaData: Media[], imgId: number): Media => {
  const [media]: Media[] = mediaData.filter((item: Media) => item.id === imgId);
  return media;
};

export const getCategoryData = (categories: Category[], categoryName): Category => {
  const [category]: Category[] = categories.filter((item: Category) => item.slug === categoryName);

  return category;
};

// export const getPostsList = (postsData: Post[], categoryId): Post[] => {
//   return postsData.filter((item: Post) => {
//     const { categories } = item;
//     const categoriesIds = categories.map((categoryItem) => categoryItem.id);
//
//     return categoriesIds.includes(categoryId);
//   });
// };

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

export const removeAllSpaces = (string: string) => {
  return string ? string.replaceAll(' ', '') : '';
};

export const getLink = (link: string) => {
  if (link) {
    const url = new URL(link);
    return url.pathname.replace('/bhakti-navigator-wp', '');
  }

  return '#';
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

export const convertServerDataObjectToArray = (obj: any) => {
  return Object.entries(obj).map(([, value]) => value);
};

export const getPages = async () => {
  const response = await fetch(`${config.API_URL}${config.WP_API_JSON}/pages?per_page=100`);
  return await response.json();
};

export const getAllPosts = async () => {
  const response = await fetch(`${config.API_URL}${config.BN_API_JSON}/posts`);
  return await response.json();
};

export const getPostsByCategory = async (category: string) => {
  const response = await fetch(`${config.API_URL}${config.BN_API_JSON}/posts/${category}`);
  const data = await response.json();
  return convertServerDataObjectToArray(data);
};

export const getPost = async (name: string) => {
  const response = await fetch(`${config.API_URL}${config.BN_API_JSON}/post/${name}`);
  return await response.json();
};

export const getMedia = async () => {
  return await fetch(`${config.API_URL}${config.WP_API_JSON}/media?per_page=100`);
};

export const getCategories = async () => {
  const response = await fetch(`${config.API_URL}${config.WP_API_JSON}/categories?per_page=100`);
  return await response.json();
};

export const getAllServerData = async () => {
  const response = await fetch(`${config.API_URL}${config.BN_API_JSON}/data`);
  const data = await response.json();
  return {
    pages: convertServerDataObjectToArray(data.pages),
    posts: convertServerDataObjectToArray(data.posts),
    categories: convertServerDataObjectToArray(data.categories),
  };
};

export const getPostData = (posts: Post[], name: string) => {
  const [post] = posts.filter((item: Post) => item.slug === name);
  return post;
};

export const decodeUrl = (url) => {
  const codeKeys = Object.keys(urlDecoding);
  const encodedSymbols = codeKeys.filter((item) => url.includes(item));

  if (encodedSymbols.length === 0) {
    return url;
  }

  return Object.entries(urlDecoding).reduce((acc, [code, value]) => {
    return acc.replaceAll(code, value);
  }, url);
};

export const formatTelegramLink = (string: string) => {
  return string.replace('https://t.me/', '');
};

export const formatWhatsappLink = (string: string) => {
  return string.replace('https://wa.me/', '');
};

export const getLinksList = (string: string) => {
  if (!!string) {
    const trimmedString = string.replaceAll(' ', '');
    const spacedString = trimmedString.replaceAll('http', ' http');
    return spacedString
      .split(' ')
      .filter((item) => item !== '')
      .map((item) => decodeUrl(item));
  }

  return [];
};

export const slideDown = (element, speed = 400) => {
  element.style.overflow = 'hidden';
  element.style.display = 'block';
  const paddingTop = parseFloat(window.getComputedStyle(element).paddingTop);
  const paddingBottom = parseFloat(window.getComputedStyle(element).paddingBottom);
  const marginTop = parseFloat(window.getComputedStyle(element).marginTop);
  const marginBottom = parseFloat(window.getComputedStyle(element).marginBottom);
  const elementHeight = element.clientHeight;
  element.style.height = 0;
  element.style.paddingTop = 0;
  element.style.paddingBottom = 0;
  element.style.marginTop = 0;
  element.style.marginBottom = 0;
  let newHeight = 0;
  let newPaddingTop = 0;
  let newPaddingBottom = 0;
  let newMarginTop = 0;
  let newMarginBottom = 0;
  const heightChangeStep = elementHeight / (elementHeight * (speed / 1000));
  const paddingTopChangeStep = paddingTop / (paddingTop * (speed / 1000));
  const paddingBottomChangeStep = paddingBottom / (paddingBottom * (speed / 1000));
  const marginTopChangeStep = marginTop / (marginTop * (speed / 1000));
  const marginBottomChangeStep = marginBottom / (marginBottom * (speed / 1000));
  // const heightChangeStep = (elementHeight * 10) / speed;
  // const paddingTopChangeStep = (paddingTop * 10) / speed;
  // const paddingBottomChangeStep = (paddingBottom * 10) / speed;
  // const marginTopChangeStep = (marginTop * 10) / speed;
  // const marginBottomChangeStep = (marginBottom * 10) / speed;

  const slideDownInterval = setInterval(() => {
    if (newHeight > elementHeight) {
      clearInterval(slideDownInterval);
      element.style.display = 'block';
      element.style.height = '';
      element.style.marginTop = '';
      element.style.marginBottom = '';
      element.style.paddingTop = '';
      element.style.paddingBottom = '';
      element.style.overflow = '';
      return;
    }

    element.style.height = newHeight + 'px';
    element.style.paddingTop = newPaddingTop + 'px';
    element.style.paddingBottom = newPaddingBottom + 'px';
    element.style.marginTop = newMarginTop + 'px';
    element.style.marginBottom = newMarginBottom + 'px';

    newHeight += heightChangeStep;
    newPaddingTop += paddingTopChangeStep;
    newPaddingBottom += paddingBottomChangeStep;
    newMarginTop += marginTopChangeStep;
    newMarginBottom += marginBottomChangeStep;
  }, 1);
};

export const formatVideoUrl = (link) => {
  const url = new URL(link);
  const { origin, searchParams } = url;
  const video = searchParams.get('v');
  searchParams.delete('v');

  return `${origin}/embed/${video}?${searchParams.toString()}`;
};

export const forWhomToArray = (string: string) => {
  return string.split('<br />');
};

export const getWebsiteName = (string: string) => {
  const url = new URL(string);
  const { hostname } = url;
  return hostname;
};

export const getUniqBhakyiLevels = (bhaktiLevels = []) => {
  const bhaktiLevelsWithoutBhadjanaKriya = bhaktiLevels.filter(
    (item) => !item?.bhaktiLevelACF?.value?.includes('bhadjana_kriya')
  );

  const [bhadjanaKriya] = bhaktiLevels.filter((item) =>
    item?.bhaktiLevelACF?.value?.includes('bhadjana_kriya')
  );

  return [bhadjanaKriya, ...bhaktiLevelsWithoutBhadjanaKriya].filter((item) => item);
};

export const clearContentFromAttrs = (content) => {
  return content.replace(
    /(style=")([^>]+)|(width=")([^\s]+)|(height=")([^\s]+)|(sizes=")([^/>]+)/g,
    ''
  );
};

export const slideUp = (element, speed = 400) => {
  element.style.overflow = 'hidden';
  element.style.display = 'block';
  const paddingTop = parseFloat(window.getComputedStyle(element).paddingTop);
  const paddingBottom = parseFloat(window.getComputedStyle(element).paddingBottom);
  const marginTop = parseFloat(window.getComputedStyle(element).marginTop);
  const marginBottom = parseFloat(window.getComputedStyle(element).marginBottom);
  const elementHeight = element.clientHeight;
  let newHeight = elementHeight;
  let newPaddingTop = paddingTop;
  let newPaddingBottom = paddingBottom;
  let newMarginTop = marginTop;
  let newMarginBottom = marginBottom;
  const heightChangeStep = elementHeight / (elementHeight * (speed / 1000));
  const paddingTopChangeStep = paddingTop ? paddingTop / (paddingTop * (speed / 1000)) : 0;
  const paddingBottomChangeStep = paddingBottom
    ? paddingBottom / (paddingBottom * (speed / 1000))
    : 0;
  const marginTopChangeStep = marginTop ? marginTop / (marginTop * (speed / 1000)) : 0;
  const marginBottomChangeStep = marginBottom ? marginBottom / (marginBottom * (speed / 1000)) : 0;

  // const heightChangeStep = (elementHeight * 10) / speed;
  // const paddingTopChangeStep = paddingTop ? (paddingTop * 10) / speed : 0;
  // const paddingBottomChangeStep = paddingBottom ? (paddingBottom * 10) / speed : 0;
  // const marginTopChangeStep = marginTop ? (marginTop * 10) / speed : 0;
  // const marginBottomChangeStep = marginBottom ? (marginBottom * 10) / speed : 0;

  const slideUpInterval = setInterval(() => {
    newHeight -= heightChangeStep;
    newPaddingTop -= paddingTopChangeStep;
    newPaddingBottom -= paddingBottomChangeStep;
    newMarginTop -= marginTopChangeStep;
    newMarginBottom -= marginBottomChangeStep;

    if (newHeight < 0) {
      clearInterval(slideUpInterval);
      element.style.display = 'none';
      element.style.height = '';
      element.style.marginTop = '';
      element.style.marginBottom = '';
      element.style.paddingTop = '';
      element.style.paddingBottom = '';
      element.style.overflow = '';
      return;
    }

    element.style.height = newHeight + 'px';
    element.style.paddingTop = newPaddingTop + 'px';
    element.style.paddingBottom = newPaddingBottom + 'px';
    element.style.marginTop = newMarginTop + 'px';
    element.style.marginBottom = newMarginBottom + 'px';
  }, 1);
};

export const lockSite = () => {
  document.querySelector('body').classList.add('site-lock');
};

export const unlockSite = () => {
  document.querySelector('body').classList.remove('site-lock');
};

export const getErrorMessageText = (error) => {
  const [message] = error.message.split(':');
  console.log('message', message);
  return message;
};

export const decodeUserId = (encodedId) => {
  const [, value] = window.atob(encodedId).split(':');
  return value;
};

export const changeAcfByRestApi = async (userId, fields) => {
  const username = 'admin';
  const pass = 'qs8o PA6l z72z M87e tIRG iXV1';
  const token = window.btoa(`${username}:${pass}`);
  const decodedId = decodeUserId(userId);
  const url = `https://bhaktinavigator.tmweb.ru/bhakti-navigator-wp/wp-json/acf/v3/users/${decodedId}`;

  const data = {
    fields,
  };

  const { acf }: any = await apiFetch({
    path: url,
    cache: 'no-cache',
    method: 'POST',
    credentials: 'omit',
    data,
    headers: {
      Authorization: `Basic ${token}`,
      'Content-Type': 'application/json; charset=UTF-8',
    },
  })
    .then((res) => {
      return res;
    })
    .catch((e) => {
      console.log('update error', e);
    });

  return { ...acf };
};

export const decodeId = (id) => {
  if (id) {
    const [, decodedId] = window.atob(id).split(':');
    return Number(decodedId);
  }

  return id;
};

export const getFilters = (filters: Post[] = []) => {
  if (!filters.length) {
    return {};
  }

  return filters.reduce((acc: any, item) => {
    const { categories } = item;
    const [category] = categories.nodes;
    const categoryName = camelCase(category.slug);

    return {
      ...acc,
      [categoryName]: has(acc, categoryName) ? [...acc?.[categoryName], item] : [item],
    };
  }, {});
};
