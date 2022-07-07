import { FAQPage } from '../../components/FAQPage/FAQPage';
import { getCategories, getCategoryData, getPosts, getPostsList } from '../../helpers/helpers';
import { ServerData, ServerSideProps } from '../../interfaces/interfaces';
import pagesStore from '../../store/pagesStore';

const Faq = ({ serverData }: ServerSideProps) => {
  const { dataPosts, dataCategories }: ServerData = serverData;
  const { setSecondaryTabBar, setCategory, setCurrentPage } = pagesStore;
  const coursesCategory = getCategoryData(dataCategories, 'faq');
  const faqs = getPostsList(dataPosts, coursesCategory?.id);
  setSecondaryTabBar(true);
  setCurrentPage('faq');
  setCategory('Вопросы и ответы');

  const list = faqs.map((item) => {
    const { title, acf } = item;
    const { author, video_url, video_duration, preview_image } = acf;
    return {
      title: title.rendered,
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
    dataPages: [],
    dataMedia: [],
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
