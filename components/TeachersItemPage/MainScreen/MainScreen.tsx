import classes from './MainScreen.module.scss';
import { Post } from '../../../interfaces/interfaces';

export const MainScreen = ({ post }: { post: Post }) => {
  const { title, acf } = post;
  const { teacher_photo = '#', in_iskcon_since = '', courses = [] } = acf || {};

  return (
    <div className={classes.MainScreen}>
      <div className={classes.BgBigCircle} />
      <div className={classes.BgSmallCircle} />

      <div className={classes.SiteWrap}>
        <div className={classes.Content}>
          <figure>
            <div className={classes.ImgContainer}>
              <div
                className={classes.Img}
                style={{ backgroundImage: `url(${teacher_photo})` }}
              ></div>
            </div>

            <figcaption>
              <h1 className={classes.Name}>{title}</h1>

              <div className={classes.Seniority}>
                В ИСККОН <span className={classes.Value}>{in_iskcon_since}</span>
              </div>

              <div className={classes.Courses}>
                <a href='#available-courses'>
                  Доступно курсов: <span className={classes.Value}>{courses.length}</span>
                </a>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
};
