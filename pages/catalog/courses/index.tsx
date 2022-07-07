import { CoursesPage } from '../../../components/CoursesPage/CoursesPage';
import pagesStore from '../../../store/pagesStore';
import { observer } from 'mobx-react-lite';
import { ServerData, ServerSideProps } from '../../../interfaces/interfaces';
import {
  getCategories,
  getCategoryData,
  getLink,
  getPosts,
  getPostsList,
} from '../../../helpers/helpers';

const Courses = observer(({ serverData }: ServerSideProps) => {
  const { dataPosts, dataCategories }: ServerData = serverData;
  const { setSecondaryTabBar, setCategory, setCurrentPage } = pagesStore;
  setCurrentPage('courses');
  setSecondaryTabBar(true);
  setCategory('Каталог');

  const coursesCategory = getCategoryData(dataCategories, 'courses');
  const courses = getPostsList(dataPosts, coursesCategory?.id);

  const list = courses.map((item) => {
    const { title, acf, link } = item;
    const { speaker, location, format, theme, bhakti_level } = acf;

    return {
      title: title.rendered,
      speaker,
      location,
      format,
      theme,
      bhakti_level,
      link: getLink(link),
    };
  });

  return <CoursesPage list={list} />;
});

export const getServerSideProps = async ({ query, req }) => {
  const serverData = {
    dataPages: [],
    dataMedia: [],
    dataPosts: [],
    dataCategories: [],
  };

  try {
    const responsePosts = await getPosts();
    const responseCategories = await getCategories();

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
