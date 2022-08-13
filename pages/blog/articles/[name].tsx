import { ServerData, ServerSideProps } from '../../../interfaces/interfaces';
import pagesStore from '../../../store/pagesStore';
import { ArticlesItemPage } from '../../../components/ArticlesItemPage/ArticlesItemPage';

const ArticlesItem = ({ serverData }: ServerSideProps) => {
  const { dataPosts, dataCategories, postName }: ServerData = serverData;
  const { setSecondaryTabBar, setCategory, setCurrentPage } = pagesStore;
  setCurrentPage('articles');
  setSecondaryTabBar(true);
  setCategory('Блог');

  const attrs = {
    postName,
    dataPosts,
    dataCategories,
  };

  return <ArticlesItemPage {...attrs} />;
};

export default ArticlesItem;

export const getServerSideProps = async ({ query }) => {
  const serverData = {
    postName: query.name,
    dataPages: [],
    dataMedia: [],
    dataPosts: [],
    dataCategories: [],
  };

  try {
    // const responsePosts = await getPosts();
    // const responseCategories = await getCategories();
    //
    // serverData.dataPosts = await responsePosts.json();
    // serverData.dataCategories = await responseCategories.json();

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
