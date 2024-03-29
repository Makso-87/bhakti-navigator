import { BlogPage } from '../../../components/BlogPage/BlogPage';
import { observer } from 'mobx-react-lite';
import { ServerData, ServerSideProps } from '../../../interfaces/interfaces';
import pagesStore from '../../../store/pagesStore';
import { graphQLClient } from '../../../helpers/graphQLClient';
import { articles } from '../../../graphql/queries/articles';

const Blog = ({ serverData }: ServerSideProps) => {
  const { dataPosts }: ServerData = serverData;
  const { setSecondaryTabBar, setCategory, setCurrentPage } = pagesStore;

  setCurrentPage('articles');
  setCategory('Блог');
  setSecondaryTabBar(true);

  const attrs = {
    posts: dataPosts.articles,
  };

  return <BlogPage {...attrs} />;
};

export const getServerSideProps = async () => {
  const serverData = {
    dataPosts: {},
    error: null,
  };

  try {
    const { posts } = await graphQLClient.request(articles);
    serverData.dataPosts = { articles: posts.nodes };

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

export default Blog;
