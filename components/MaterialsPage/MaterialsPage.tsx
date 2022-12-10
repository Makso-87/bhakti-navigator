import { Layout } from '../Layout';
import classes from '../CoursesPage/CoursesPage.module.scss';
import { TopSearch } from '../CommonComponents/TopSearch/TopSearch';
import { MaterialsList } from '../CommonComponents/MaterialsList/MaterialsList';
import { Filters } from '../CommonComponents/Filters/Filters';
import { HelpBanner } from '../Banners/HelpBanner/HelpBanner';
import { getLink } from '../../helpers/helpers';
import { useLazyQuery } from '@apollo/client';
import { useState } from 'react';
import { GraphQLErrors } from '@apollo/client/errors';
import { searchMaterials } from '../../graphql/queries/searchMaterials';
import { Preloader } from '../CommonComponents/Preloader/Preloader';
import pagesStore from '../../store/pagesStore';

export const MaterialsPage = (props) => {
  const [list, setList] = useState([...(props.list ?? [])]);
  const [error, setError] = useState<GraphQLErrors | string>([]);
  const place = pagesStore.currentPage;

  const [fetchMaterials, { loading }] = useLazyQuery(searchMaterials, {
    notifyOnNetworkStatusChange: true,
    onCompleted: ({ posts }) => {
      if (posts.nodes.length) {
        const newList = posts.nodes.map((item) => {
          const { title, link, materialACF, id } = item;
          const { author, mainTheme, type, bhaktiLevel } = materialACF;

          return {
            id,
            title,
            link: getLink(link),
            author,
            mainTheme,
            type,
            bhaktiLevel,
          };
        });

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
    await fetchMaterials({
      variables: {
        search: searchQuery,
      },
    });
  };

  const applyFilters = (filter) => {
    // const filterKeys = Object.keys(filter);
    // const filtered = filterPosts(props?.list, filter);
    // setList(filterKeys.length ? [...filtered] : [...props?.list]);
  };

  return (
    <Layout>
      <div className={classes.CatalogPage}>
        <div className={classes.SiteWrap}>
          <div className={`${classes.Container} ${classes.Materials}`}>
            <div className={classes.LeftSide}>
              <TopSearch searchHandler={onSearch} placeholder='Поиск по материалам' />

              {loading ? (
                <div className={classes.LoaderContainer}>
                  <Preloader />
                </div>
              ) : (
                <MaterialsList list={list} />
              )}

              {!loading && list.length > 6 ? (
                <div className={classes.ShowMore}>
                  <a href='#'>Больше материалов</a>
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
};
