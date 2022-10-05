import { ServerData, ServerSideProps } from '../../../interfaces/interfaces';
import pagesStore from '../../../store/pagesStore';
import { ArticlesItemPage } from '../../../components/ArticlesItemPage/ArticlesItemPage';
import { getPost } from '../../../helpers/helpers';

const ArticlesItem = ({ serverData }: ServerSideProps) => {
  const { dataPost }: ServerData = serverData;
  const { setSecondaryTabBar, setCategory, setCurrentPage } = pagesStore;
  setCurrentPage('articles');
  setSecondaryTabBar(true);
  setCategory('Блог');

  const attrs = {
    dataPost,
  };

  return <ArticlesItemPage {...attrs} />;
};

export default ArticlesItem;

export const getServerSideProps = async ({ query }) => {
  const serverData = {
    postName: query.name,
    dataPost: {},
    error: null,
  };

  try {
    serverData.dataPost = await getPost(query.name);

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
