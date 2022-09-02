import { FAQPage } from '../../components/FAQPage/FAQPage';
import { getPostsByCategory } from '../../helpers/helpers';
import { ServerData, ServerSideProps } from '../../interfaces/interfaces';
import pagesStore from '../../store/pagesStore';

const Faq = ({ serverData }: ServerSideProps) => {
  const { dataPosts, dataCategories }: ServerData = serverData;
  const { setSecondaryTabBar, setCategory, setCurrentPage } = pagesStore;
  setSecondaryTabBar(true);
  setCurrentPage('faq');
  setCategory('Вопросы и ответы');

  const list = dataPosts.faq.map((item) => {
    const { title, acf } = item;
    const { author, video_url, video_duration, preview_image } = acf;
    return {
      title,
      author,
      video_url,
      video_duration,
      imgUrl: preview_image,
    };
  });

  return <FAQPage list={list} />;
};

export default Faq;

export const getServerSideProps = async ({ query, req }) => {
  const serverData = {
    dataPosts: {},
  };

  try {
    serverData.dataPosts = { faq: await getPostsByCategory('faq') };

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
