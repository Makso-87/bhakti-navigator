import { MaterialsPage } from '../../../components/MaterialsPage/MaterialsPage';
import pagesStore from '../../../store/pagesStore';
import {
  getCategories,
  getCategoryData,
  getLink,
  getPosts,
  getPostsList,
} from '../../../helpers/helpers';
import { ServerData, ServerSideProps } from '../../../interfaces/interfaces';

const Materials = ({ serverData }: ServerSideProps) => {
  const { dataPosts, dataCategories }: ServerData = serverData;
  const { setSecondaryTabBar, setCategory, setCurrentPage } = pagesStore;
  setCurrentPage('materials');
  setCategory('Каталог');
  setSecondaryTabBar(true);

  const materialsCategory = getCategoryData(dataCategories, 'materials');
  const materials = getPostsList(dataPosts, materialsCategory?.id) || [];

  const list = materials.map((item) => {
    const { title, link, acf, id } = item;
    const { author, theme, type, bhakti_level } = acf;

    return {
      id,
      title: title.rendered,
      link: getLink(link),
      author,
      theme,
      type,
      bhakti_level,
    };
  });

  return <MaterialsPage list={list} />;
};

export default Materials;

export const getServerSideProps = async ({ query, req }) => {
  const serverData = {
    dataPages: [],
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
