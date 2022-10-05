import { CoursesPage } from '../../../components/CoursesPage/CoursesPage';
import pagesStore from '../../../store/pagesStore';
import { observer } from 'mobx-react-lite';
import { ServerData, ServerSideProps } from '../../../interfaces/interfaces';
import { getPostsByCategory } from '../../../helpers/helpers';
import { graphQLClient } from '../../../helpers/graphQLClient';
import { courses } from '../../../graphql/queries/courses';

const Courses = observer(({ serverData }: ServerSideProps) => {
  const { dataPosts }: ServerData = serverData;
  const { setSecondaryTabBar, setCategory, setCurrentPage } = pagesStore;
  setCurrentPage('courses');
  setSecondaryTabBar(true);
  setCategory('Каталог');

  return <CoursesPage list={dataPosts.courses} />;
});

export const getServerSideProps = async ({ query, req }) => {
  const serverData = {
    dataPosts: {},
    error: null,
  };

  try {
    // serverData.dataPosts = { courses: await getPostsByCategory('courses') };
    const { posts } = await graphQLClient.request(courses);

    serverData.dataPosts = {
      courses: posts.nodes,
    };

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

export default Courses;
