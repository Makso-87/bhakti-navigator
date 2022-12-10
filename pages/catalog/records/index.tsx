import pagesStore from '../../../store/pagesStore';
import { observer } from 'mobx-react-lite';
import { ServerData, ServerSideProps } from '../../../interfaces/interfaces';
import { getFilters, getLink } from '../../../helpers/helpers';
import { RecordsPage } from '../../../components/RecordsPage/RecordsPage';
import { graphQLClient } from '../../../helpers/graphQLClient';
import { records } from '../../../graphql/queries/records';
import { filters } from '../../../graphql/queries/filters';
import filtersStore from '../../../store/filtersStore';
import { useEffect } from 'react';

const Records = observer(({ serverData }: ServerSideProps) => {
  const { dataPosts }: ServerData = serverData;
  const { records = [], filters = [] } = dataPosts;
  const { setSecondaryTabBar, setCategory, setCurrentPage } = pagesStore;
  const { setFiltersList } = filtersStore;
  const sortedFilters = getFilters(filters);

  useEffect(() => {
    setCurrentPage('records');
    setSecondaryTabBar(true);
    setCategory('Каталог');
    setFiltersList({ ...sortedFilters });
  }, []);

  const list = records?.map((item) => {
    const { title, recordACF, link, id } = item;
    const { mainTheme, bhaktiLevel, type, author } = recordACF;

    return {
      id,
      title,
      mainTheme,
      bhaktiLevel,
      link: getLink(link),
      type,
      author,
    };
  });

  return <RecordsPage list={list} />;
});

export const getServerSideProps = async () => {
  const serverData = {
    dataPosts: {},
    error: null,
  };

  try {
    const { posts } = await graphQLClient.request(records);
    const { posts: postsFilters } = await graphQLClient.request(filters);

    serverData.dataPosts = {
      records: posts.nodes,
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

export default Records;
