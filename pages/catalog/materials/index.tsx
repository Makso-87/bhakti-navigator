import { MaterialsPage } from '../../../components/MaterialsPage/MaterialsPage';
import pagesStore from '../../../store/pagesStore';
import { getLink, getPostsByCategory } from '../../../helpers/helpers';
import { ServerData, ServerSideProps } from '../../../interfaces/interfaces';

const Materials = ({ serverData }: ServerSideProps) => {
  const { dataPosts, dataCategories }: ServerData = serverData;
  const { setSecondaryTabBar, setCategory, setCurrentPage } = pagesStore;
  setCurrentPage('materials');
  setCategory('Каталог');
  setSecondaryTabBar(true);

  const list = dataPosts.materials.map((item) => {
    const { title, link, acf, id } = item;
    const { author, theme, type, bhakti_level } = acf;

    return {
      id,
      title,
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
    dataPosts: {},
  };

  try {
    serverData.dataPosts = { materials: await getPostsByCategory('materials') };

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
