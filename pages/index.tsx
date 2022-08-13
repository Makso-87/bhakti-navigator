import { MainPage } from '../components/MainPage/MainPage';
import dataStore from '../store/dataStore';
import { ServerData, ServerSideProps } from '../interfaces/interfaces';
import { observer } from 'mobx-react-lite';
import pagesStore from '../store/pagesStore';
import { getAllServerData, getCategories, getMedia, getPages } from '../helpers/helpers';

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
    const data = await getAllServerData();

    serverData.dataPages = data.pages;
    serverData.dataPosts = data.posts;
    serverData.dataCategories = data.categories;

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
