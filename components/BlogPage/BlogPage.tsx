import { Layout } from '../Layout';
import { Articles } from '../CommonComponents/Articles/Articles';
import { getFormattedPosts } from '../../helpers/helpers';
import { TopSearch } from '../CommonComponents/TopSearch/TopSearch';
import classes from './BlogPage.module.scss';
import { pairsFormattedPosts } from '../../types/types';

export const BlogPage = ({ posts, categories }) => {
  const tileMaxCount = 3;
  const formattedList: pairsFormattedPosts = getFormattedPosts(posts);
  const allowedPostsList = formattedList.filter((postPair, index) => index < tileMaxCount);

  const attrs = {
    list: allowedPostsList,
    tileMaxCount,
  };

  return (
    <Layout>
      <div className={classes.BlogPage}>
        <div className={classes.SiteWrap}>
          <TopSearch placeholder='Поиск по блогу' />

          <Articles {...attrs} />
        </div>
      </div>
    </Layout>
  );
};
