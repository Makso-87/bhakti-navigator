import { CoursesPage } from '../../../components/CoursesPage/CoursesPage';
import pagesStore from '../../../store/pagesStore';
import { observer } from 'mobx-react-lite';
import { ServerData, ServerSideProps } from '../../../interfaces/interfaces';
import { getPostsByCategory } from '../../../helpers/helpers';

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
  };

  try {
    serverData.dataPosts = { courses: await getPostsByCategory('courses') };

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

export default Courses;
