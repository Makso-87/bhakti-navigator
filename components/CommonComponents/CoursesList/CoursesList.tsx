import classes from './CoursesList.module.scss';
import { CourseItem } from './CourseItem/CourseItem';
import { getLink } from '../../../helpers/helpers';

export const CoursesList = (props) => {
  const { columnsCount, list = [] } = props;

  return (
    <div className={classes.Tile}>
      {list.length
        ? list.map((course, index) => {
            const { title, courseACF, link } = course;
            const {
              speaker = {},
              location,
              format,
              bhaktiLevel = {},
              mainTheme = {},
            } = courseACF || {};

            const attrs = {
              title,
              speaker: speaker?.title || '',
              location,
              format,
              theme: mainTheme?.title || '',
              bhaktiLevel,
              link: getLink(link),
              columnsCount,
            };

            return <CourseItem key={index} {...attrs} />;
          })
        : null}
    </div>
  );
};
