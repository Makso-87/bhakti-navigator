import classes from './MainScreen.module.scss';
import bhaktiVigyanaGosvami from '../../../images/teachers/bhakti-vigyana-gosvami.png';

export const MainScreen = (props) => {
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
                style={{ backgroundImage: `url(${bhaktiVigyanaGosvami.src})` }}
              ></div>
            </div>

            <figcaption>
              <h1 className={classes.Name}>Бхакти Вигьяна Госвами</h1>

              <div className={classes.Seniority}>
                В ИСККОН <span className={classes.Value}>с 1978-го года</span>
              </div>

              <div className={classes.Courses}>
                <a href='#'>
                  Доступно курсов: <span className={classes.Value}>3</span>
                </a>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
};
