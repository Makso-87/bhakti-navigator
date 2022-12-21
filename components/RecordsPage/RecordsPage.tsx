import { Layout } from '../Layout';
import classes from '../CoursesPage/CoursesPage.module.scss';
import { TopSearch } from '../CommonComponents/TopSearch/TopSearch';
import { MaterialsList } from '../CommonComponents/MaterialsList/MaterialsList';
import { Filters } from '../CommonComponents/Filters/Filters';
import { HelpBanner } from '../Banners/HelpBanner/HelpBanner';
import { useLazyQuery } from '@apollo/client';
import { searchRecords } from '../../graphql/queries/searchRecords';
import { useState } from 'react';
import { GraphQLErrors } from '@apollo/client/errors';
import { Preloader } from '../CommonComponents/Preloader/Preloader';
import pagesStore from '../../store/pagesStore';
import { filterPosts } from '../../helpers/filterPosts';
import { observer } from 'mobx-react-lite';

export const RecordsPage = observer((props: any) => {
  const [list, setList] = useState([...(props.list ?? [])]);
  const [error, setError] = useState<GraphQLErrors | string>([]);
  const place = pagesStore.currentPage;

  const applyFilters = (filter) => {
    const filterKeys = Object.keys(filter);
    const filtered = filterPosts(props?.list, place);

    setList(filterKeys.length ? [...filtered] : [...props?.list]);
  };

  const [fetchRecords, { loading }] = useLazyQuery(searchRecords, {
    notifyOnNetworkStatusChange: true,
    onCompleted: ({ posts }) => {
      if (posts.nodes.length) {
        const newList = filterPosts(posts.nodes, place);

        setList([...newList]);
      } else {
        setList([]);
      }
    },
    onError: (error) => {
      setError(error.graphQLErrors ?? '');
      console.error(error);
    },
  });

  const onSearch = async (searchQuery: string) => {
    await fetchRecords({
      variables: {
        search: searchQuery,
      },
    });
  };

  return (
    <Layout>
      <div className={classes.CatalogPage}>
        <div className={classes.SiteWrap}>
          <div className={`${classes.Container} ${classes.Materials}`}>
            <div className={classes.LeftSide}>
              <TopSearch searchHandler={onSearch} placeholder='Поиск по курсам' />
              {loading ? (
                <div className={classes.LoaderContainer}>
                  <Preloader />
                </div>
              ) : (
                <MaterialsList list={list} />
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
