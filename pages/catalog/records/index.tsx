import pagesStore from '../../../store/pagesStore';
import { observer } from 'mobx-react-lite';
import { ServerData, ServerSideProps } from '../../../interfaces/interfaces';
import { getLink, getPostsByCategory } from '../../../helpers/helpers';
import { RecordsPage } from '../../../components/RecordsPage/RecordsPage';
import { graphQLClient } from '../../../helpers/graphQLClient';
import { records } from '../../../graphql/queries/records';

const Records = observer(({ serverData }: ServerSideProps) => {
  const { dataPosts }: ServerData = serverData;
  const { setSecondaryTabBar, setCategory, setCurrentPage } = pagesStore;
  setCurrentPage('records');
  setSecondaryTabBar(true);
  setCategory('Каталог');

  const list = dataPosts.records.map((item) => {
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

export const getServerSideProps = async ({ query, req }) => {
  const serverData = {
    dataPosts: {},
    error: null,
  };

  try {
    const { posts } = await graphQLClient.request(records);
    serverData.dataPosts = { records: posts.nodes };

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
