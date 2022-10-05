import classes from './MainScreen.module.scss';
import { Post } from '../../../interfaces/interfaces';
import photo_plug from '../../../images/icons/photo_plug.svg';

export const MainScreen = ({ post }: { post: Post }) => {
  const { title, teacherACF } = post;
  const { teacherPhoto = {}, inIskconSince = '', courses = [] } = teacherACF || {};

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
                style={{ backgroundImage: `url(${teacherPhoto?.sourceUrl || photo_plug.src})` }}
              ></div>
            </div>

            <figcaption>
              <h1 className={classes.Name}>{title}</h1>

              <div className={classes.Seniority}>
                В ИСККОН <span className={classes.Value}>{inIskconSince}</span>
              </div>

              <div className={classes.Courses}>
                <a href='#available-courses'>
                  Доступно курсов: <span className={classes.Value}>{courses?.length}</span>
                </a>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
};
