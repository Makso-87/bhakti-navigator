import { BlogPage } from '../../../components/BlogPage/BlogPage';
import { observer } from 'mobx-react-lite';
import { ServerData, ServerSideProps } from '../../../interfaces/interfaces';
import pagesStore from '../../../store/pagesStore';
import { getPostsByCategory } from '../../../helpers/helpers';

const Blog = observer(({ serverData }: ServerSideProps) => {
  const { dataPosts }: ServerData = serverData;
  const { setSecondaryTabBar, setCategory, setCurrentPage } = pagesStore;

  setCurrentPage('articles');
  setCategory('Блог');
  setSecondaryTabBar(true);

  const attrs = {
    posts: dataPosts.articles,
  };

  return <BlogPage {...attrs} />;
});

export const getServerSideProps = async ({ query, req }) => {
  const serverData = {
    dataPosts: {},
  };

  try {
    serverData.dataPosts = { articles: await getPostsByCategory('articles') };

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

export default Blog;
