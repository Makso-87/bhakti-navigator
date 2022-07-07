import { TeachersPages } from '../../../components/TeachersPages/TeachersPages';
import pagesStore from '../../../store/pagesStore';
import {
  getCategories,
  getCategoryData,
  getLink,
  getPosts,
  getPostsList,
} from '../../../helpers/helpers';
import { ServerData, ServerSideProps } from '../../../interfaces/interfaces';

const Teachers = ({ serverData }: ServerSideProps) => {
  const { dataPosts, dataCategories }: ServerData = serverData;
  const { setSecondaryTabBar, setCategory, setCurrentPage } = pagesStore;
  setCurrentPage('teachers');
  setCategory('Каталог');
  setSecondaryTabBar(true);

  const teachersCategory = getCategoryData(dataCategories, 'teachers');
  const teachers = getPostsList(dataPosts, teachersCategory?.id) || [];

  const list = teachers.map((item) => {
    const { link, acf, title, id } = item;
    const { city, teacher_photo } = acf;

    return {
      id,
      title: title.rendered,
      link: getLink(link),
      city,
      teacher_photo,
    };
  });

  return <TeachersPages list={list} />;
};

export default Teachers;

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
