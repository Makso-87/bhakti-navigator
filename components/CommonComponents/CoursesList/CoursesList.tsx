import classes from './CoursesList.module.scss';
import { CourseItem } from './CourseItem/CourseItem';
import { Category, Post } from '../../../interfaces/interfaces';
import dataStore from '../../../store/dataStore';
import { getCategoryData, getPostsList } from '../../../helpers/helpers';

export const CoursesList = (props) => {
  const { columnsCount } = props;
  const { dataPosts, dataCategories }: { dataPosts: Post[]; dataCategories: Category[] } =
    dataStore;

  const coursesCategory = getCategoryData(dataCategories, 'courses');
  const courses = getPostsList(dataPosts, coursesCategory?.id);

  return (
    <div className={classes.Tile}>
      {courses.length
        ? courses.map((course: Post) => {
            const { title, acf, link } = course;
            const { speaker, location, format, theme, bhakti_level, id } = acf;

            const attrs = {
              title: title.rendered,
              speaker,
              location,
              format,
              theme,
              bhakti_level,
              link,
              columnsCount,
            };

            return <CourseItem key={id} {...attrs} />;
          })
        : null}
    </div>
  );
};
