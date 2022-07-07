import classes from './Teachers.module.scss';
import pramanandaPuri from '../../../images/teachers/pramananda_puri.png';

export const Teachers = (props) => {
  return (
    <div className={classes.TeachersScreen}>
      <h2>Преподаватели</h2>

      <div className={classes.SiteWrap}>
        <div className={classes.TeachersList}>
          <div className={classes.TeachersItem}>
            <figure>
              <div className={classes.ImgContainer}>
                <div
                  className={classes.Img}
                  style={{ backgroundImage: `url(${pramanandaPuri.src})` }}
                ></div>
              </div>

              <figcaption>
                <div className={classes.Name}>Парамананда Пури дас</div>
                <div className={classes.Role}>Руководитель Бхакти центра</div>
              </figcaption>
            </figure>
          </div>

          <div className={classes.TeachersItem}>
            <figure>
              <div className={classes.ImgContainer}>
                <div
                  className={classes.Img}
                  style={{ backgroundImage: `url(${pramanandaPuri.src})` }}
                ></div>
              </div>

              <figcaption>
                <div className={classes.Name}>Парамананда Пури дас</div>
                <div className={classes.Role}>Руководитель Бхакти центра</div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};
