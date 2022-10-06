import { FAQPage } from '../../components/FAQPage/FAQPage';
import { getPostsByCategory } from '../../helpers/helpers';
import { ServerData, ServerSideProps } from '../../interfaces/interfaces';
import pagesStore from '../../store/pagesStore';
import { graphQLClient } from '../../helpers/graphQLClient';
import { faqList } from '../../graphql/queries/faqList';

const Faq = ({ serverData }: ServerSideProps) => {
  const { dataPosts, dataCategories }: ServerData = serverData;
  const { setSecondaryTabBar, setCategory, setCurrentPage } = pagesStore;
  setSecondaryTabBar(true);
  setCurrentPage('faq');
  setCategory('Вопросы и ответы');

  const list = dataPosts.faq.map((item) => {
    const { title, faqACF } = item;
    const { author, videoUrl, videoDuration, previewImage } = faqACF;
    return {
      title,
      author,
      videoUrl,
      videoDuration,
      imgUrl: previewImage.sourceUrl,
    };
  });

  return <FAQPage list={list} />;
};

export default Faq;

export const getServerSideProps = async ({ query, req }) => {
  const serverData = {
    dataPosts: {},
    error: null,
  };

  try {
    const { posts } = await graphQLClient.request(faqList);
    serverData.dataPosts = { faq: posts.nodes };

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
