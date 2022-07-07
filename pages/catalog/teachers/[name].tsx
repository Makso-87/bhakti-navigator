import { TeachersItemPage } from '../../../components/TeachersItemPage/TeachersItemPage';
import { getCategories, getPosts } from '../../../helpers/helpers';
import { ServerData, ServerSideProps } from '../../../interfaces/interfaces';
import pagesStore from '../../../store/pagesStore';

const TeachersItem = ({ serverData }: ServerSideProps) => {
  const { dataPosts, dataCategories, postName }: ServerData = serverData;
  const { setSecondaryTabBar, setCategory, setCurrentPage } = pagesStore;
  setCurrentPage('teachers');
  setSecondaryTabBar(true);
  setCategory('Каталог');

  const attrs = {
    postName,
    dataPosts,
    dataCategories,
  };

  return <TeachersItemPage {...attrs} />;
};

export default TeachersItem;

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
