import Link from 'next/link';
import classes from './MainScreen.module.scss';
import mainScreen from '../../../images/main-screen.png';

export const MainScreen = (props) => {
  return (
    <div className={classes.MainScreen}>
      <div className={classes.SiteWrap}>
        <div className={classes.Content}>
          <div className={classes.LeftSide}>
            <h1>
              Навигатор
              <br /> <span>по вайшнавскому образованию</span>
            </h1>

            <div className={classes.Text}>
              Хотите понять, в какой точке «дорожной карты» духовного образования вы находитесь,
              получить индивидуальный маршрут и рекомендации, чему и где можно поучиться? Пройдите
              тест!
            </div>

            <div className={classes.Button}>
              <Link href={'/navigator/page_of_test.php'}>
                <a>Пройти тест!</a>
              </Link>
            </div>

            <div className={classes.WayImg}>
              <div className={`${classes.WayMark} ${classes.WaySortOrder}`}>
                <a href='#sort-order'>Разобраться</a>
              </div>

              <div className={`${classes.WayMark} ${classes.WayFind}`}>
                <a href='#find'>Найти</a>
              </div>

              <div className={`${classes.WayMark} ${classes.WaySelect}`}>
                <a href='#select'>Выбрать</a>
              </div>
            </div>
          </div>

          <div className={classes.RightSide}>
            <div className={classes.Img} style={{ backgroundImage: `url(${mainScreen.src})` }} />
          </div>
        </div>
      </div>
    </div>
  );
};
