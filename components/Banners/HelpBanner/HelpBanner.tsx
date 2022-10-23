import classes from './HelpBanner.module.scss';
import testToStart from '../../../images/testtostart.png';
import cn from 'classnames';

export const HelpBanner = (props) => {
  const { marginBottomNone = false } = props;
  const classesHelpBanner = cn(classes.HelpBanner, {
    [classes.MarginBottomNone]: marginBottomNone,
  });

  return (
    <div className={classesHelpBanner}>
      <div className={classes.SiteWrap}>
        <div className={classes.Content}>
          <div className={classes.LeftSide}>
            <h3>Не знаете, с чего начать?</h3>
            <div className={classes.Text}>
              Пройдите тест, и мы подберем курсы под ваши персональные цели и задачи.
            </div>

            <div className={classes.Button}>
              <a href='test'>Пройти тест</a>
            </div>
          </div>

          <div className={classes.RightSide}>
            <div className={classes.Image} style={{ backgroundImage: `url(${testToStart.src})` }} />
          </div>
        </div>
      </div>
    </div>
  );
};
