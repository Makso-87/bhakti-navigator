import classes from './SortOutScreen.module.scss';
import Link from 'next/link';
import ScrollableAnchor from 'react-scrollable-anchor';
import { configureAnchors } from 'react-scrollable-anchor';
import { Articles } from '../../CommonComponents/Articles/Articles';
import { ServerData } from '../../../interfaces/interfaces';
import { getFormattedPosts } from '../../../helpers/helpers';
import { observer } from 'mobx-react-lite';
import { pairsFormattedPosts } from '../../../types/types';

configureAnchors({ offset: -100, scrollDuration: 400 });

export const SortOutScreen = observer((props) => {
  const { dataPosts }: ServerData = props;

  const sort_out_screen_articles_number = 2;
  const list = dataPosts.articles || [];
  const formattedList: pairsFormattedPosts = getFormattedPosts(list);
  const allowedPostsList = formattedList.filter(
    (postPair, index) => index < Number(sort_out_screen_articles_number)
  );

  const attrs = {
    showMore: false,
    list: allowedPostsList,
    tileMaxCount: sort_out_screen_articles_number,
  };

  return (
    <ScrollableAnchor id={'sort-out'}>
      <div className={classes.SortOutScreen}>
        <div className={classes.SiteWrap}>
          <h2>Разобраться</h2>

          <div className={classes.AboutText}>
            В{' '}
            <Link href={'/blog/articles'}>
              <a>Блоге</a>
            </Link>{' '}
            вместе со старшими вайшнавами и духовными учителями мы пытаемся разобраться в тонкостях
            духовного образования, чтобы обрести правильное понимание, настроение и продвигаться по
            пути бхакти так, как этому учит Шрила Прабхупада.
          </div>

          <Articles {...attrs} />

          <div className={classes.GoToBlog}>
            <Link href='/blog/articles'>
              <a>Перейти в Блог</a>
            </Link>
          </div>
        </div>
      </div>
    </ScrollableAnchor>
  );
});
