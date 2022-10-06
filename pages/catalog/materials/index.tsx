import { MaterialsPage } from '../../../components/MaterialsPage/MaterialsPage';
import pagesStore from '../../../store/pagesStore';
import { getLink, getPostsByCategory } from '../../../helpers/helpers';
import { ServerData, ServerSideProps } from '../../../interfaces/interfaces';
import { graphQLClient } from '../../../helpers/graphQLClient';
import { materials } from '../../../graphql/queries/materials';

const Materials = ({ serverData }: ServerSideProps) => {
  const { dataPosts }: ServerData = serverData;
  const { setSecondaryTabBar, setCategory, setCurrentPage } = pagesStore;
  setCurrentPage('materials');
  setCategory('Каталог');
  setSecondaryTabBar(true);

  const list = dataPosts.materials.map((item) => {
    const { title, link, materialACF, id } = item;
    const { author, mainTheme, type, bhaktiLevel } = materialACF;

    return {
      id,
      title,
      link: getLink(link),
      author,
      mainTheme,
      type,
      bhaktiLevel,
    };
  });

  return <MaterialsPage list={list} />;
};

export default Materials;

export const getServerSideProps = async ({ query, req }) => {
  const serverData = {
    dataPosts: {},
    error: null,
  };

  try {
    const { posts } = await graphQLClient.request(materials);
    serverData.dataPosts = { materials: posts.nodes };

    return {
      props: {
        serverData,
      },
    };
  } catch (e) {
    serverData.error = JSON.stringify(e);

    return {
      props: {
        serverData,
      },
    };
  }
};
