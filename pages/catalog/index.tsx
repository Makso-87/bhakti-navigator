import { CoursesPage } from '../../components/CoursesPage/CoursesPage';
import pagesStore from '../../store/pagesStore';
import { observer } from 'mobx-react-lite';
import { ServerData, ServerSideProps } from '../../interfaces/interfaces';
import dataStore from '../../store/dataStore';
import config from '../../config/config';

const Courses = observer(({ serverData }: ServerSideProps) => {
  const { dataPages, dataMedia, dataPosts, dataCategories }: ServerData = serverData;
  const { setDataPages, setDataPosts, setDataMedia, setDataCategories } = dataStore;
  const { setSecondaryTabBar, setCategory, setCurrentPage } = pagesStore;
  setDataPages(dataPages);
  setDataPosts(dataPosts);
  setDataMedia(dataMedia);
  setDataCategories(dataCategories);
  setCurrentPage('catalog');
  setSecondaryTabBar(true);
  setCategory('Каталог');

  return <CoursesPage />;
});

export const getServerSideProps = async ({ query, req }) => {
  const serverData = {
    dataPages: [],
    dataMedia: [],
    dataPosts: [],
    dataCategories: [],
  };

  try {
    const responsePages = await fetch(`${config.API_URL}${config.WP_API_JSON}/pages?per_page=100`);
    const responseMedia = await fetch(`${config.API_URL}${config.WP_API_JSON}/media?per_page=100`);
    const responsePosts = await fetch(`${config.API_URL}${config.WP_API_JSON}/posts?per_page=100`);
    const responseCategories = await fetch(
      `${config.API_URL}${config.WP_API_JSON}/categories?per_page=100`
    );

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
    return {
      props: {
        serverData,
      },
    };
  }
};

export default Courses;
