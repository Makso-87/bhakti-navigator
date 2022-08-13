import classes from './ProjectCourses.module.scss';
import Link from 'next/link';
import { getLink } from '../../../helpers/helpers';

export const ProjectCourses = (props) => {
  const { list = [] } = props;
  return (
    <div className={classes.ProjectCourses}>
      <div className={classes.SiteWrap}>
        <h2 className={classes.Title}>Курсы проекта</h2>
        <ul className={classes.CoursesList}>
          {list.map((item, index) => {
            const { title, link } = item;

            return (
              <li>
                <Link href={getLink(link)}>
                  <a>{`${index + 1}. ${title}`}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
