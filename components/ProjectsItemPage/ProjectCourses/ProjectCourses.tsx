import classes from './ProjectCourses.module.scss';
import { CoursesList } from '../../CommonComponents/CoursesList/CoursesList';

export const ProjectCourses = (props) => {
  const { list = [] } = props;
  return (
    <div className={classes.ProjectCourses}>
      <div className={classes.SiteWrap}>
        <h2 className={classes.Title}>Доступные курсы</h2>
        <CoursesList list={list} />
      </div>
    </div>
  );
};
