import { CoursesPage } from '../../../components/CoursesPage/CoursesPage';
import pagesStore from '../../../store/pagesStore';
import { observer } from 'mobx-react-lite';
import { ServerData, ServerSideProps } from '../../../interfaces/interfaces';
import { graphQLClient } from '../../../helpers/graphQLClient';
import { courses } from '../../../graphql/queries/courses';
import { filters } from '../../../graphql/queries/filters';
import filtersStore from '../../../store/filtersStore';
import { getFilters } from '../../../helpers/helpers';
import { useEffect } from 'react';

const Courses = ({ serverData }: ServerSideProps) => {
  const { dataPosts }: ServerData = serverData;
  const { courses = [], filters = [] } = dataPosts;
  const { setSecondaryTabBar, setCategory, setCurrentPage } = pagesStore;
  const { setFiltersList, setFilter } = filtersStore;
  const sortedFilters = getFilters(filters);

  useEffect(() => {
    setCurrentPage('courses');
    setSecondaryTabBar(true);
    setCategory('Каталог');
    setFiltersList({ ...sortedFilters });
    setFilter({});
  }, []);

  console.log('filters', filters);
  console.log('sortedFilters', sortedFilters);
  console.log('filtersStore', filtersStore);

  return <CoursesPage list={courses} />;
};

export const getServerSideProps = async () => {
  const serverData = {
    dataPosts: {},
    error: null,
  };

  try {
    const { posts } = await graphQLClient.request(courses);
    const { posts: postsFilters } = await graphQLClient.request(filters);

    serverData.dataPosts = {
      courses: posts.nodes,
      filters: postsFilters.nodes,
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
