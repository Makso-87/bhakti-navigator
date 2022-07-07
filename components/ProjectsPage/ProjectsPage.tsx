import { Layout } from '../Layout';
import { TopSearch } from '../CommonComponents/TopSearch/TopSearch';
import { HelpBanner } from '../Banners/HelpBanner/HelpBanner';
import classes from '../CoursesPage/CoursesPage.module.scss';
import { ProjectsList } from '../CommonComponents/ProjectsList/ProjectsList';

export const ProjectsPage = (props) => {
  const { list } = props;

  return (
    <Layout>
      <div className={`${classes.CatalogPage} ${classes.Projects}`}>
        <div className={classes.SiteWrap}>
          <div className={classes.ItemsList}>
            <TopSearch placeholder='Поиск по проектам' />

            <div className={classes.Middle}>
              <ProjectsList list={list} />
            </div>

            <div className={classes.Bottom}>
              <div className={classes.ShowMore}>
                <a href='#'>Все проекты</a>
              </div>
            </div>
          </div>
        </div>

        <HelpBanner />
      </div>
    </Layout>
  );
};
