import { MainPage } from '../components/MainPage/MainPage';
import dataStore from '../store/dataStore';
import { ServerData, ServerSideProps } from '../interfaces/interfaces';
import { observer } from 'mobx-react-lite';
import pagesStore from '../store/pagesStore';
import {
  getAllPosts,
  getAllServerData,
  getCategories,
  getMedia,
  getPages,
} from '../helpers/helpers';

const Index = observer(({ serverData }: ServerSideProps) => {
  const { dataPages, dataPosts, dataCategories }: ServerData = serverData;
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
    dataPages,
    dataPosts,
    dataCategories,
  };

  return <MainPage {...attrs} />;
});

export const getServerSideProps = async ({ query, req }) => {
  const serverData = {
    dataPages: [],
    dataMedia: [],
    dataPosts: [],
    dataCategories: [],
  };

  try {
    const posts = await getAllPosts();
    const pages = await getPages();
    const categories = await getCategories();

    serverData.dataPages = [...pages];
    serverData.dataPosts = [...posts];
    serverData.dataCategories = [...categories];

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
