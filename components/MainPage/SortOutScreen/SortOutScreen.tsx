import classes from './SortOutScreen.module.scss';
import Link from 'next/link';
import { Articles } from '../../CommonComponents/Articles/Articles';
import { Category, Media, Page, Post } from '../../../interfaces/interfaces';
import { getCategoryData, getPageData, getPostsList } from '../../../helpers/helpers';
import dataStore from '../../../store/dataStore';
import { observer } from 'mobx-react-lite';

export const SortOutScreen = observer(() => {
  const {
    dataPages,
    dataPosts,
    dataCategories,
  }: { dataPages: Page[]; dataMedia: Media[]; dataPosts: Post[]; dataCategories: Category[] } =
    dataStore;

  const mainPage: Page = getPageData(dataPages, 'main-page');
  const category: Category = getCategoryData(dataCategories, 'articles');
  const posts = getPostsList(dataPosts, category?.id);
  const { sort_out_screen_title = '', sort_out_screen_articles_number = 2 } = mainPage?.acf || {};
  console.log('Страницы', JSON.parse(JSON.stringify(dataPages)));
  console.log('Посты', JSON.parse(JSON.stringify(dataPosts)));
  console.log('Категории', JSON.parse(JSON.stringify(dataCategories)));
  console.log('Посты по категории', JSON.parse(JSON.stringify(posts)));

  const attrs = {
    posts,
    tileMaxCount: sort_out_screen_articles_number,
  };

  return (
    <div className={classes.SortOutScreen} id='sort-order'>
      <div className={classes.SiteWrap}>
        <h2>{sort_out_screen_title}</h2>

        <div className={classes.AboutText}>
          В{' '}
          <Link href={'/blog'}>
            <a>Блоге</a>
          </Link>{' '}
          вместе со старшими вайшнавами и духовными учителями мы пытаемся разобраться в тонкостях
          духовного образования, чтобы обрести правильное понимание, настроение и продвигаться по
          пути бхакти так, как этому учит Шрила Прабхупада.
        </div>

        <Articles {...attrs} />

        <div className={classes.GoToBlog}>
          <Link href='/blog'>
            <a>Перейти в Блог</a>
          </Link>
        </div>
      </div>
    </div>
  );
});
