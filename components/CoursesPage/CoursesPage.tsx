import { Layout } from '../Layout';
import { CoursesList } from '../CommonComponents/CoursesList/CoursesList';
import classes from './CoursesPage.module.scss';
import { Filters } from '../CommonComponents/Filters/Filters';

export const CoursesPage = () => {
  return (
    <Layout>
      <div className={classes.CatalogPage}>
        <div className={classes.SiteWrap}>
          <div className={classes.Container}>
            <div className={classes.LeftSide}>
              <div className={classes.Top}>
                <div className={classes.Search}>
                  <input type='text' placeholder='Поиск по курсам' />
                  <button />
                </div>
              </div>

              <CoursesList columnsCount={2} />

              <div className={classes.ShowMore}>
                <a href='#'>Больше курсов</a>
              </div>
            </div>

            <div className={classes.RightSide}>
              <Filters />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
