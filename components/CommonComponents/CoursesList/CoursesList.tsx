import classes from './CoursesList.module.scss';
import { CourseItem } from './CourseItem/CourseItem';

export const CoursesList = (props) => {
  const { columnsCount, list = [] } = props;

  return (
    <div className={classes.Tile}>
      {list.length
        ? list.map((course, index) => {
            const { title, speaker, location, format, theme, bhakti_level, link } = course;

            const attrs = {
              title,
              speaker,
              location,
              format,
              theme,
              bhakti_level,
              link,
              columnsCount,
            };

            return <CourseItem key={index} {...attrs} />;
          })
        : null}
    </div>
  );
};
