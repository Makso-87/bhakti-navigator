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
import isArray from 'lodash/isArray';
import has from 'lodash/has';
import { filtersFields } from '../../helpers/filterSets';

export const CoursesPage = observer((props: any) => {
  const place = pagesStore.currentPage;
  const filtersSet = filtersFields[place] || [];
  // const sortedByTypeFilters = filtersSet.reduce((acc, item) => {
  //   if (has(acc, item.type)) {
  //     return {
  //       ...acc,
  //       [item.type]: [...acc[item.type], item],
  //     };
  //   }
  //
  //   return {
  //     ...acc,
  //     [item.type]: [item],
  //   };
  // }, {});
  // console.log('typeRadioFilters', sortedByTypeFilters);

  const filterPosts = (postsList: any[], filter) => {
    const filterKeys = Object.keys(filter);

    const sortedByTypeFilters: any = filterKeys.reduce((acc, item) => {
      const filterItem = filter[item];
      filterItem.name = item;

      if (has(acc, filterItem.type)) {
        return {
          ...acc,
          [filterItem.type]: [...acc[filterItem.type], filterItem],
        };
      }

      return {
        ...acc,
        [filterItem.type]: [filterItem],
      };
    }, {});

    const { checkbox, radio } = sortedByTypeFilters;

    console.log('filter', filter);
    console.log('filtersSet', filtersSet);
    console.log('typeRadioFilters', sortedByTypeFilters);

    const filteredByCheckbox = checkbox
      ? postsList.filter((postItem) => {
          const { courseACF } = postItem;
          const allMatches = [];

          checkbox.forEach((filterItem) => {
            const keyName = filterItem.name === 'teachers' ? 'speaker' : filterItem.name;

            let matches = [];

            if (isArray(courseACF[keyName])) {
              matches = courseACF[keyName].filter((acfItem) => {
                const result = filterItem.list.filter((item) => item === acfItem.id);

                return result.length;
              });

              if (matches.length) {
                allMatches.push(matches);
                return;
              }
            }

            matches = filterItem.list.filter((filterItem) => {
              return filterItem === courseACF[keyName].id;
            });

            if (matches.length) {
              allMatches.push(matches);
              return;
            }
          });

          return allMatches.length;
        })
      : postsList;

    return radio
      ? filteredByCheckbox.filter((filteredByCheckboxItem) => {
          const { courseACF } = filteredByCheckboxItem;

          const radioFiltersMatches = radio.filter((radioFilterItem) => {
            return radioFilterItem.list.includes(courseACF[radioFilterItem.name].id);
          });

          return radioFiltersMatches.length === radio.length;
        })
      : filteredByCheckbox;
  };

  const [list, setList] = useState([...(props?.list || [])]);
  const [error, setError] = useState<GraphQLErrors | string>([]);

  const applyFilters = (filter) => {
    const filterKeys = Object.keys(filter);
    const filtered = filterPosts(props?.list, filter);

    setList(filterKeys.length ? [...filtered] : [...props?.list]);
  };

  const [fetchCourses, { loading }] = useLazyQuery(searchCourses, {
    notifyOnNetworkStatusChange: true,
    onCompleted: ({ posts }) => {
      // const filtered = filterPosts(posts.nodes, filter);
      // setList([...filtered]);
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
