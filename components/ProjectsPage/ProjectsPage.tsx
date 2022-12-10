import { Layout } from '../Layout';
import { TopSearch } from '../CommonComponents/TopSearch/TopSearch';
import { HelpBanner } from '../Banners/HelpBanner/HelpBanner';
import classes from '../CoursesPage/CoursesPage.module.scss';
import { ProjectsList } from '../CommonComponents/ProjectsList/ProjectsList';
import { useLazyQuery } from '@apollo/client';
import { useState } from 'react';
import { GraphQLErrors } from '@apollo/client/errors';
import { getLink } from '../../helpers/helpers';
import { searchProjects } from '../../graphql/queries/searchProjects';
import { Preloader } from '../CommonComponents/Preloader/Preloader';

export const ProjectsPage = (props) => {
  const [list, setList] = useState([...props.list]);
  const [error, setError] = useState<GraphQLErrors | string>([]);

  const [fetchProjects, { loading }] = useLazyQuery(searchProjects, {
    notifyOnNetworkStatusChange: true,
    onCompleted: ({ posts }) => {
      if (posts.nodes.length) {
        const newList = posts.nodes.map((item) => {
          const { link, projectACF, title, id } = item;
          const { format, city, webSite, logo } = projectACF;

          return {
            id,
            title,
            link: getLink(link),
            format,
            city,
            site: webSite,
            logo: logo.sourceUrl,
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
    await fetchProjects({
      variables: {
        search: searchQuery,
      },
    });

    console.error(error);
  };

  console.error(error);

  return (
    <Layout>
      <div className={`${classes.CatalogPage} ${classes.Projects}`}>
        <div className={classes.SiteWrap}>
          <div className={classes.Container}>
            <div className={classes.Middle}>
              <div className={classes.ItemsList}>
                <TopSearch searchHandler={onSearch} placeholder='Поиск по проектам' />

                {loading ? (
                  <div className={classes.LoaderContainer}>
                    <Preloader />
                  </div>
                ) : (
                  <ProjectsList list={list} />
                )}
              </div>

              {!loading && list.length > 6 ? (
                <div className={classes.Bottom}>
                  <div className={classes.ShowMore}>
                    <a href='#'>Все проекты</a>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>

        <HelpBanner />
      </div>
    </Layout>
  );
};
