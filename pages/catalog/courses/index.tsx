import { CoursesPage } from '../../../components/CoursesPage/CoursesPage';
import pagesStore from '../../../store/pagesStore';
import { observer } from 'mobx-react-lite';
import { ServerData, ServerSideProps } from '../../../interfaces/interfaces';
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

export const getServerSideProps = async () => {
  const serverData = {
    dataPosts: {},
    error: null,
  };

  try {
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
