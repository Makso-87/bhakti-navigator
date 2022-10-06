import { ServerData, ServerSideProps } from '../../../interfaces/interfaces';
import pagesStore from '../../../store/pagesStore';
import { ArticlesItemPage } from '../../../components/ArticlesItemPage/ArticlesItemPage';
import { getPost } from '../../../helpers/helpers';
import { graphQLClient } from '../../../helpers/graphQLClient';
import { article } from '../../../graphql/queries/article';

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
    const { posts } = await graphQLClient.request(article, { name: query.name });
    const [post] = posts.nodes;
    serverData.dataPost = post;

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
