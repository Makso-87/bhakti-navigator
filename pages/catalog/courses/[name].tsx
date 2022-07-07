import { CoursesItemPage } from '../../../components/CoursesItemPage/CoursesItemPage';
import { getCategories, getPosts } from '../../../helpers/helpers';
import { ServerData, ServerSideProps } from '../../../interfaces/interfaces';
import pagesStore from '../../../store/pagesStore';

const CoursesItem = ({ serverData }: ServerSideProps) => {
  const { dataPosts, dataCategories, postName }: ServerData = serverData;
  const { setSecondaryTabBar, setCategory, setCurrentPage } = pagesStore;
  setCurrentPage('courses');
  setSecondaryTabBar(true);
  setCategory('Каталог');

  const attrs = {
    postName,
    dataPosts,
    dataCategories,
  };

  return <CoursesItemPage {...attrs} />;
};

export default CoursesItem;

export const getServerSideProps = async ({ query, req }) => {
  const serverData = {
    postName: query.name,
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
