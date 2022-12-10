import { Layout } from '../Layout';
import { Articles } from '../CommonComponents/Articles/Articles';
import { getFormattedPosts } from '../../helpers/helpers';
import { TopSearch } from '../CommonComponents/TopSearch/TopSearch';
import classes from './BlogPage.module.scss';
import { pairsFormattedPosts } from '../../types/types';
import { searchCourses } from '../../graphql/queries/searchCourses';
import { useLazyQuery } from '@apollo/client';
import { useState } from 'react';
import { GraphQLErrors } from '@apollo/client/errors';
import { searchArticles } from '../../graphql/queries/searchArticles';
import { Preloader } from '../CommonComponents/Preloader/Preloader';

export const BlogPage = (props) => {
  const { posts } = props;
  const tileMaxCount = 9999999;
  const formattedList: pairsFormattedPosts = getFormattedPosts(posts);
  const allowedPostsList = formattedList.filter((postPair, index) => index < tileMaxCount);

  const [list, setList] = useState([...allowedPostsList]);
  const [error, setError] = useState<GraphQLErrors | string>([]);

  const [fetchArticles, { loading }] = useLazyQuery(searchArticles, {
    notifyOnNetworkStatusChange: true,
    onCompleted: ({ posts }) => {
      const formattedFoundArticlesList: pairsFormattedPosts = getFormattedPosts(posts.nodes);
      const allowedFoundPostsList = formattedFoundArticlesList.filter(
        (postPair, index) => index < tileMaxCount
      );

      setList([...allowedFoundPostsList]);
    },
    onError: (error) => {
      setError(error.graphQLErrors ?? '');
      console.error(error);
    },
  });

  const onSearch = async (searchQuery: string) => {
    await fetchArticles({
      variables: {
        search: searchQuery,
      },
    });
  };

  const attrs = {
    list,
    tileMaxCount,
    showMore: list.length > 6,
  };

  return (
    <Layout>
      <div className={classes.BlogPage}>
        <div className={classes.SiteWrap}>
          <TopSearch searchHandler={onSearch} placeholder='Поиск по блогу' />

          {loading ? (
            <div className={classes.LoaderContainer}>
              <Preloader />
            </div>
          ) : (
            <Articles {...attrs} />
          )}
        </div>
      </div>
    </Layout>
  );
};
