import bvp from '../../../images/icons/bvp.png';
import classes from './MainScreen.module.scss';

export const MainScreen = (props) => {
  return (
    <div className={classes.MainScreen}>
      <div className={classes.BgBigCircle} />

      <div className={classes.SiteWrap}>
        <div className={classes.Content}>
          <figure>
            <div className={classes.ImgContainer}>
              <div className={classes.Img} style={{ backgroundImage: `url(${bvp.src})` }}></div>
            </div>

            <figcaption>
              <div className={classes.ProjectInfoBlitz}>
                <h1>Большой Ведический Практикум</h1>

                <div className={classes.Location}>Москва</div>

                <div className={classes.Link}>
                  <a href='https://vk.com/bvpracticum' target='_blank' rel='noreferrer'>
                    Перейти на сайт проекта
                  </a>
                </div>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
};
