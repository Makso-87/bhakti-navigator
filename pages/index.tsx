import { MainPage } from '../components/MainPage/MainPage';
import dataStore from '../store/dataStore';
import { ServerData, ServerSideProps } from '../interfaces/interfaces';
import { observer } from 'mobx-react-lite';
import pagesStore from '../store/pagesStore';
import { getAllPosts, getPostsByCategory } from '../helpers/helpers';
import { graphQLClient } from '../helpers/graphQLClient';
import { courses } from '../graphql/queries/courses';
import { articles } from '../graphql/queries/articles';

const Index = observer(({ serverData }: ServerSideProps) => {
  const { dataPosts }: ServerData = serverData;
  const { setCurrentPage, setCategory, setSecondaryTabBar } = pagesStore;
  const { setDataPages, setDataPosts, setDataMedia, setDataCategories } = dataStore;

  // setDataPages(dataPages);
  // setDataPosts(dataPosts);
  // setDataMedia(dataMedia);
  // setDataCategories(dataCategories);
  setCurrentPage('main');
  setCategory('');
  setSecondaryTabBar(false);

  const attrs = {
    dataPosts,
  };

  return <MainPage {...attrs} />;
});

export const getServerSideProps = async ({ query, req }) => {
  const serverData = {
    dataPosts: {},
    error: null,
  };

  try {
    const { posts } = await graphQLClient.request(courses);
    const { posts: articlesList } = await graphQLClient.request(articles);

    serverData.dataPosts = {
      courses: posts.nodes,
      articles: articlesList.nodes,
    };

    return {
      props: {
        serverData,
      },
    };
  } catch (e) {
    serverData.error = JSON.stringify(e);

    return {
      props: {
        serverData,
      },
    };
  }
};

export default Index;
