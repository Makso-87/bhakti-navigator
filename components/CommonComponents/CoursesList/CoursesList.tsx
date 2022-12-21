import classes from './CoursesList.module.scss';
import { CourseItem } from './CourseItem/CourseItem';
import { getLink } from '../../../helpers/helpers';
import { observer } from 'mobx-react-lite';

export const CoursesList = observer((props: any) => {
  const { columnsCount, list = [] } = props;

  return (
    <div className={classes.Tile}>
      {list.length
        ? list.map((course, index) => {
            const { id, title, courseACF, link } = course;
            const {
              speaker = {},
              location,
              format,
              bhaktiLevel = {},
              mainTheme = {},
            } = courseACF || {};

            const attrs = {
              id,
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
});
