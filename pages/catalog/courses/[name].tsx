import { CoursesItemPage } from '../../../components/CoursesItemPage/CoursesItemPage';
import { getPost } from '../../../helpers/helpers';
import { ServerData, ServerSideProps } from '../../../interfaces/interfaces';
import pagesStore from '../../../store/pagesStore';
import { graphQLClient } from '../../../helpers/graphQLClient';
import { course } from '../../../graphql/queries/course';

const CoursesItem = ({ serverData }: ServerSideProps) => {
  console.log('serverData', serverData);
  const { dataPost }: ServerData = serverData;
  const { setSecondaryTabBar, setCategory, setCurrentPage } = pagesStore;
  setCurrentPage('courses');
  setSecondaryTabBar(true);
  setCategory('Каталог');

  const attrs = {
    dataPost,
  };

  return <CoursesItemPage {...attrs} />;
};

export default CoursesItem;

export const getServerSideProps = async ({ query, req }) => {
  const serverData = {
    postName: query.name,
    dataPages: [],
    dataMedia: [],
    dataPost: {},
    dataCategories: [],
    error: null,
  };

  try {
    // serverData.dataPost = await getPost(query.name);
    const { posts } = await graphQLClient.request(course, { name: query.name });
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
        // error: JSON.stringify(e),
      },
    };
  }
};
