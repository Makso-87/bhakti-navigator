import { BlogPage } from '../../../components/BlogPage/BlogPage';
import { observer } from 'mobx-react-lite';
import { ServerData, ServerSideProps } from '../../../interfaces/interfaces';
import pagesStore from '../../../store/pagesStore';
import { getCategories, getPosts } from '../../../helpers/helpers';

const Blog = observer(({ serverData }: ServerSideProps) => {
  const { dataPosts, dataCategories }: ServerData = serverData;
  const { setSecondaryTabBar, setCategory, setCurrentPage } = pagesStore;

  setCurrentPage('articles');
  setCategory('Блог');
  setSecondaryTabBar(true);

  const attrs = {
    posts: dataPosts,
    categories: dataCategories,
  };

  console.log(serverData);

  return <BlogPage {...attrs} />;
});

export const getServerSideProps = async ({ query, req }) => {
  const serverData = {
    dataPages: [],
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

export default Blog;
