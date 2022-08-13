import { getPost } from '../../../helpers/helpers';
import { ServerData, ServerSideProps } from '../../../interfaces/interfaces';
import pagesStore from '../../../store/pagesStore';
import { MaterialsItemPage } from '../../../components/MaterialsItemPage/MaterialsItemPage';

const MaterialsItem = ({ serverData }: ServerSideProps) => {
  const { dataPost }: ServerData = serverData;
  const { setSecondaryTabBar, setCategory, setCurrentPage } = pagesStore;
  setCurrentPage('materials');
  setSecondaryTabBar(true);
  setCategory('Каталог');

  const attrs = {
    dataPost,
  };

  return <MaterialsItemPage {...attrs} />;
};

export default MaterialsItem;

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
