import classes from './AvailableCoursesScreen.module.scss';
import { CoursesList } from '../../CommonComponents/CoursesList/CoursesList';
import { Post } from '../../../interfaces/interfaces';
import ScrollableAnchor from 'react-scrollable-anchor';
import { configureAnchors } from 'react-scrollable-anchor';

configureAnchors({ offset: -150, scrollDuration: 400 });

export const AvailableCoursesScreen = ({ post }: { post: Post }) => {
  const { courses = [] } = post?.teacherACF || {};
  return (
    <div className={classes.AvailableCoursesScreen}>
      <div className={classes.BgBigCircle} />
      <ScrollableAnchor id={'available-courses'}>
        <div className={classes.SiteWrap}>
          <h2>Доступные курсы</h2>

          <CoursesList list={courses} columnsCount={3} />
        </div>
      </ScrollableAnchor>
    </div>
  );
};
