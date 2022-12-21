import { FAQPage } from '../../components/FAQPage/FAQPage';
import { ServerData, ServerSideProps } from '../../interfaces/interfaces';
import pagesStore from '../../store/pagesStore';
import { graphQLClient } from '../../helpers/graphQLClient';
import { faqList } from '../../graphql/queries/faqList';
import { filters } from '../../graphql/queries/filters';
import filtersStore from '../../store/filtersStore';
import { getFilters } from '../../helpers/helpers';
import { useEffect } from 'react';

const Faq = ({ serverData }: ServerSideProps) => {
  const { dataPosts }: ServerData = serverData;
  const { faq = [], filters = [] } = dataPosts;
  const { setSecondaryTabBar, setCategory, setCurrentPage } = pagesStore;
  const { setFiltersList, setFilter } = filtersStore;
  const sortedFilters = getFilters(filters);

  useEffect(() => {
    setSecondaryTabBar(true);
    setCurrentPage('faq');
    setCategory('Вопросы и ответы');
    setFiltersList({ ...sortedFilters });
    setFilter({});
  }, []);

  return <FAQPage list={faq} />;
};

export default Faq;

export const getServerSideProps = async () => {
  const serverData = {
    dataPosts: {},
    error: null,
  };

  try {
    const { posts } = await graphQLClient.request(faqList);
    const { posts: postsFilters } = await graphQLClient.request(filters);
    serverData.dataPosts = {
      faq: posts.nodes,
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
