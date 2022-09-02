import { MainPage } from '../components/MainPage/MainPage';
import dataStore from '../store/dataStore';
import { ServerData, ServerSideProps } from '../interfaces/interfaces';
import { observer } from 'mobx-react-lite';
import pagesStore from '../store/pagesStore';
import { getAllPosts, getPostsByCategory } from '../helpers/helpers';

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
  };

  try {
    serverData.dataPosts = {
      courses: await getPostsByCategory('courses'),
      articles: await getPostsByCategory('articles'),
    };
    return {
      props: {
        serverData,
      },
    };
  } catch (e) {
    console.log(e);
    return {
      props: {
        serverData,
      },
    };
  }
};

export default Index;
