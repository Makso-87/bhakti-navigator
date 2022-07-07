import classes from './SortOutScreen.module.scss';
import Link from 'next/link';
import { Articles } from '../../CommonComponents/Articles/Articles';
import { Category, Page, Post, ServerData } from '../../../interfaces/interfaces';
import {
  getCategoryData,
  getFormattedPosts,
  getPageData,
  getPostsList,
} from '../../../helpers/helpers';
import { observer } from 'mobx-react-lite';
import { pairsFormattedPosts } from '../../../types/types';

export const SortOutScreen = observer((props) => {
  const { dataPages, dataPosts, dataCategories }: ServerData = props;

  const mainPage: Page = getPageData(dataPages, 'main-page');
  const category: Category = getCategoryData(dataCategories, 'articles');
  const posts: Post[] = getPostsList(dataPosts, category?.id);
  const { sort_out_screen_title = '', sort_out_screen_articles_number = 2 } = mainPage?.acf || {};
  const list = getPostsList(posts, category?.id);
  const formattedList: pairsFormattedPosts = getFormattedPosts(list);
  const allowedPostsList = formattedList.filter(
    (postPair, index) => index < sort_out_screen_articles_number
  );

  const attrs = {
    list: allowedPostsList,
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
