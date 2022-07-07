import { MainPage } from '../components/MainPage/MainPage';
import dataStore from '../store/dataStore';
import { ServerData, ServerSideProps } from '../interfaces/interfaces';
import { observer } from 'mobx-react-lite';
import pagesStore from '../store/pagesStore';
import { getCategories, getMedia, getPages, getPosts } from '../helpers/helpers';

const Index = observer(({ serverData }: ServerSideProps) => {
  const { dataPages, dataMedia, dataPosts, dataCategories }: ServerData = serverData;
  const { setCurrentPage, setCategory, setSecondaryTabBar } = pagesStore;
  const { setDataPages, setDataPosts, setDataMedia, setDataCategories } = dataStore;

  setDataPages(dataPages);
  setDataPosts(dataPosts);
  setDataMedia(dataMedia);
  setDataCategories(dataCategories);
  setCurrentPage('main');
  setCategory('');
  setSecondaryTabBar(false);

  const attrs = {
    dataPages,
    dataMedia,
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
    const responsePages = await getPages();
    const responseMedia = await getMedia();
    const responsePosts = await getPosts();
    const responseCategories = await getCategories();

    serverData.dataPages = await responsePages.json();
    serverData.dataMedia = await responseMedia.json();
    serverData.dataPosts = await responsePosts.json();
    serverData.dataCategories = await responseCategories.json();

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
