import { Layout } from '../Layout';
import { CoursesList } from '../CommonComponents/CoursesList/CoursesList';
import classes from './CoursesPage.module.scss';
import { Filters } from '../CommonComponents/Filters/Filters';
import { TopSearch } from '../CommonComponents/TopSearch/TopSearch';
import { HelpBanner } from '../Banners/HelpBanner/HelpBanner';
import { searchCourses } from '../../graphql/queries/searchCourses';
import { useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import { GraphQLErrors } from '@apollo/client/errors';
import { Preloader } from '../CommonComponents/Preloader/Preloader';
import pagesStore from '../../store/pagesStore';
import { observer } from 'mobx-react-lite';
import { filterPosts } from '../../helpers/filterPosts';

export const CoursesPage = observer((props: any) => {
  const place = pagesStore.currentPage;

  const [list, setList] = useState([...(props?.list || [])]);
  const [error, setError] = useState<GraphQLErrors | string>([]);

  const applyFilters = (filter) => {
    const filterKeys = Object.keys(filter);
    const filtered = filterPosts(props?.list, place);

    setList(filterKeys.length ? [...filtered] : [...props?.list]);
  };

  const [fetchCourses, { loading }] = useLazyQuery(searchCourses, {
    notifyOnNetworkStatusChange: true,
    onCompleted: ({ posts }) => {
      const filtered = filterPosts(posts.nodes, place);
      setList([...filtered]);
    },
    onError: (error) => {
      setError(error.graphQLErrors ?? '');
      console.error(error);
    },
  });

  const onSearch = async (searchQuery: string) => {
    await fetchCourses({
      variables: {
        search: searchQuery,
      },
    });
  };

  return (
    <Layout>
      <div className={classes.CatalogPage}>
        <div className={classes.SiteWrap}>
          <div className={classes.Container}>
            <div className={classes.LeftSide}>
              <TopSearch searchHandler={onSearch} placeholder='Поиск по курсам' />

              {loading ? (
                <div className={classes.LoaderContainer}>
                  <Preloader />
                </div>
              ) : (
                <CoursesList list={list} columnsCount={2} />
              )}

              {!loading && list.length > 6 ? (
                <div className={classes.ShowMore}>
                  <a href='#'>Больше курсов</a>
                </div>
              ) : null}
            </div>

            <div className={classes.RightSide}>
              <Filters name='Фильтры' place={place} applyFilters={applyFilters} />
            </div>
          </div>
        </div>

        <HelpBanner marginBottomNone={true} />
      </div>
    </Layout>
  );
});
