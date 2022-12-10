import { Layout } from '../Layout';
import { HelpBanner } from '../Banners/HelpBanner/HelpBanner';
import { TopSearch } from '../CommonComponents/TopSearch/TopSearch';
import classes from '../CoursesPage/CoursesPage.module.scss';
import { TeachersList } from '../CommonComponents/TeachersList/TeachersList';
import { getLink } from '../../helpers/helpers';
import { useLazyQuery } from '@apollo/client';
import { useState } from 'react';
import { GraphQLErrors } from '@apollo/client/errors';
import { searchTeachers } from '../../graphql/queries/searchTeachers';
import { Preloader } from '../CommonComponents/Preloader/Preloader';

export const TeachersPages = (props) => {
  const [list, setList] = useState([...(props.list ?? [])]);
  const [error, setError] = useState<GraphQLErrors | string>([]);

  const [fetchTeachers, { loading }] = useLazyQuery(searchTeachers, {
    notifyOnNetworkStatusChange: true,
    onCompleted: ({ posts }) => {
      if (posts.nodes.length) {
        const newList = posts.nodes.map((item) => {
          const { link, teacherACF, title, id } = item;
          const { city, teacherPhoto, courses = [] } = teacherACF;

          return {
            id,
            title,
            link: getLink(link),
            city,
            teacherPhoto: teacherPhoto.sourceUrl,
            courses,
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
    await fetchTeachers({
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
            <div className={classes.Middle}>
              <div className={classes.ItemsList}>
                <TopSearch searchHandler={onSearch} placeholder='Поиск по преподавателям' />

                <div className={classes.Middle}>
                  {loading ? (
                    <div className={classes.LoaderContainer}>
                      <Preloader />
                    </div>
                  ) : (
                    <TeachersList list={list} />
                  )}
                </div>

                {!loading && list.length > 6 ? (
                  <div className={classes.Bottom}>
                    <div className={classes.ShowMore}>
                      <a href='#'>Все преподаватели</a>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>

        <HelpBanner />
      </div>
    </Layout>
  );
};
