import classes from './HelpBanner.module.scss';
import testtostart from '../../../images/testtostart.png';

export const HelpBanner = () => {
  return (
    <div className={classes.HelpBanner}>
      <div className={classes.SiteWrap}>
        <div className={classes.Content}>
          <div className={classes.LeftSide}>
            <h3>Не знаете, с чего начать?</h3>
            <div className={classes.Text}>
              Пройдите тест, и мы подберем курсы под ваши персональные цели и задачи.
            </div>

            <div className={classes.Button}>
              <a href='/navigator/page_of_test.php'>Пройти тест!</a>
            </div>
          </div>

          <div className={classes.RightSide}>
            <div className={classes.Image} style={{ backgroundImage: `url(${testtostart.src})` }} />
          </div>
        </div>
      </div>
    </div>
  );
};
