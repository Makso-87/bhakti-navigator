import classes from './CoursesList.module.scss';
import { CourseItem } from './CourseItem/CourseItem';
import { getLink } from '../../../helpers/helpers';

export const CoursesList = (props) => {
  const { columnsCount, list = [] } = props;

  return (
    <div className={classes.Tile}>
      {list.length
        ? list.map((course, index) => {
            const { title, acf, link } = course;
            const { speaker = {}, location, format, theme, bhakti_level = {} } = acf || {};

            const attrs = {
              title,
              speaker: speaker?.title || '',
              location,
              format,
              theme,
              bhakti_level,
              link: getLink(link),
              columnsCount,
            };

            return <CourseItem key={index} {...attrs} />;
          })
        : null}
    </div>
  );
};
