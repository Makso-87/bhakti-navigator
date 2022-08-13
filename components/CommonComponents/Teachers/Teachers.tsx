import classes from './Teachers.module.scss';
import Link from 'next/link';
import { Post } from '../../../interfaces/interfaces';
import { getLink } from '../../../helpers/helpers';

export const Teachers = (props) => {
  const { teachers = [] } = props;
  const headerText = teachers.length > 1 ? 'Преподаватели' : 'Преподаватель';
  return (
    <div className={classes.TeachersScreen}>
      <h2>{headerText}</h2>

      <div className={classes.SiteWrap}>
        <div className={classes.TeachersList}>
          {teachers.length
            ? teachers.map((item: Post) => {
                const { title, id, link, acf } = item;
                const { teacher_photo } = acf;

                return (
                  <div key={id} className={classes.TeachersItem}>
                    <Link href={getLink(link)}>
                      <a>
                        <figure>
                          <div className={classes.ImgContainer}>
                            <div
                              className={classes.Img}
                              style={{ backgroundImage: `url(${teacher_photo})` }}
                            ></div>
                          </div>

                          <figcaption>
                            <div className={classes.Name}>{title}</div>
                            <div className={classes.Role}>преподаватель</div>
                          </figcaption>
                        </figure>
                      </a>
                    </Link>
                  </div>
                );
              })
            : null}
        </div>
      </div>
    </div>
  );
};
