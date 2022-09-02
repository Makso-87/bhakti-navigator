import pagesStore from '../../../store/pagesStore';
import { observer } from 'mobx-react-lite';
import { ServerData, ServerSideProps } from '../../../interfaces/interfaces';
import { getLink, getPostsByCategory } from '../../../helpers/helpers';
import { RecordsPage } from '../../../components/RecordsPage/RecordsPage';

const Records = observer(({ serverData }: ServerSideProps) => {
  const { dataPosts }: ServerData = serverData;
  const { setSecondaryTabBar, setCategory, setCurrentPage } = pagesStore;
  setCurrentPage('records');
  setSecondaryTabBar(true);
  setCategory('Каталог');

  const list = dataPosts.records.map((item) => {
    const { title, acf, link, id } = item;
    const { theme, bhakti_level, type, author } = acf;

    return {
      id,
      title,
      theme,
      bhakti_level,
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
  };

  try {
    serverData.dataPosts = { records: await getPostsByCategory('records') };

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

export default Records;
