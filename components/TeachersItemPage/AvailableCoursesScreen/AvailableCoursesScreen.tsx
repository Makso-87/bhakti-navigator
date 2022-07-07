import classes from './AvailableCoursesScreen.module.scss';
import { CoursesList } from '../../CommonComponents/CoursesList/CoursesList';

export const AvailableCoursesScreen = (props) => {
  return (
    <div className={classes.AvailableCoursesScreen}>
      <div className={classes.BgBigCircle} />

      <div className={classes.SiteWrap}>
        <h2>Доступные курсы</h2>

        <CoursesList />
      </div>
    </div>
  );
};
