import { MainPage } from '../components/MainPage/MainPage';
import { ServerData, ServerSideProps } from '../interfaces/interfaces';
import { observer } from 'mobx-react-lite';
import pagesStore from '../store/pagesStore';
import { graphQLClient } from '../helpers/graphQLClient';
import { courses } from '../graphql/queries/courses';
import { articles } from '../graphql/queries/articles';

const Index = ({ serverData }: ServerSideProps) => {
  const { dataPosts }: ServerData = serverData;
  const { setCurrentPage, setCategory, setSecondaryTabBar } = pagesStore;

  setCurrentPage('main');
  setCategory('');
  setSecondaryTabBar(false);

  const attrs = {
    dataPosts,
  };

  return <MainPage {...attrs} />;
};

export const getServerSideProps = async () => {
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
