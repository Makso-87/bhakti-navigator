import { TeachersItemPage } from '../../../components/TeachersItemPage/TeachersItemPage';
import { getPost } from '../../../helpers/helpers';
import { ServerData, ServerSideProps } from '../../../interfaces/interfaces';
import pagesStore from '../../../store/pagesStore';

const TeachersItem = ({ serverData }: ServerSideProps) => {
  const { dataPost }: ServerData = serverData;
  const { setSecondaryTabBar, setCategory, setCurrentPage } = pagesStore;
  setCurrentPage('teachers');
  setSecondaryTabBar(true);
  setCategory('Каталог');

  const attrs = {
    post: { ...dataPost },
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
    dataPost: {},
    dataCategories: [],
  };

  try {
    serverData.dataPost = await getPost(query.name);

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
