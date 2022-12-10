import { MaterialsPage } from '../../../components/MaterialsPage/MaterialsPage';
import pagesStore from '../../../store/pagesStore';
import { getFilters, getLink } from '../../../helpers/helpers';
import { ServerData, ServerSideProps } from '../../../interfaces/interfaces';
import { graphQLClient } from '../../../helpers/graphQLClient';
import { materials } from '../../../graphql/queries/materials';
import { filters } from '../../../graphql/queries/filters';
import filtersStore from '../../../store/filtersStore';
import { useEffect } from 'react';

const Materials = ({ serverData }: ServerSideProps) => {
  const { dataPosts }: ServerData = serverData;
  const { materials = [], filters = [] } = dataPosts;
  const { setSecondaryTabBar, setCategory, setCurrentPage } = pagesStore;
  const { setFiltersList } = filtersStore;
  const sortedFilters = getFilters(filters);

  useEffect(() => {
    setCurrentPage('materials');
    setCategory('Каталог');
    setSecondaryTabBar(true);
    setFiltersList({ ...sortedFilters });
  }, []);

  const list =
    materials?.map((item) => {
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
    }) || [];

  return <MaterialsPage list={list} />;
};

export default Materials;

export const getServerSideProps = async () => {
  const serverData = {
    dataPosts: {},
    error: null,
  };

  try {
    const { posts } = await graphQLClient.request(materials);
    const { posts: postsFilters } = await graphQLClient.request(filters);

    serverData.dataPosts = {
      materials: posts.nodes,
      filters: postsFilters.nodes,
    };

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
