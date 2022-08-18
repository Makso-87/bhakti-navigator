import Link from 'next/link';
import classes from './MainScreen.module.scss';
import { Media, Page } from '../../../interfaces/interfaces';
import { observer } from 'mobx-react-lite';
import dataStore from '../../../store/dataStore';
import { getMediaData, getPageData } from '../../../helpers/helpers';
import mainScreen from '../../../images/main-screen.png';
import { Button } from '../../CommonComponents/Button/Button';

export const MainScreen = observer(() => {
  // const { dataPages, dataMedia }: { dataPages: Page[]; dataMedia: Media[] } = dataStore;
  // const mainPage: Page = getPageData(dataPages, 'main-page');
  // const imgId = mainPage?.acf?.main_screen_image;
  // const mainScreenImg: Media = getMediaData(dataMedia, imgId);

  return (
    <div className={classes.MainScreen}>
      <div className={classes.SiteWrap}>
        <div className={classes.Content}>
          <div className={classes.LeftSide}>
            {/*<h1 className={classes.TitleVar1}>*/}
            {/*  Навигатор*/}
            {/*  <br /> <span>по вайшнавскому образованию</span>*/}
            {/*</h1>*/}

            <h1 className={classes.TitleVar2}>
              <div>Бхакти</div>
              <div>навигатор</div>
            </h1>

            {/*<div className={classes.Text}>{mainPage?.acf?.main_screen_text}</div>*/}
            <div className={classes.Text}>
              Хотите понять, в какой точке «дорожной карты» духовного образования вы находитесь,
              получить индивидуальный маршрут и рекомендации, чему и где можно поучиться? Пройдите
              тест!
            </div>

            <Button text='Пройти тест' link='/test' />

            <div className={classes.WayImg}>
              <div className={`${classes.WayMark} ${classes.WaySortOrder}`}>
                <a href='#sort-out'>Разобраться</a>
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
            <div
              className={classes.Img}
              // style={{ backgroundImage: `url(${mainScreenImg?.source_url})` }}
              style={{ backgroundImage: `url(${mainScreen.src})` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
});
