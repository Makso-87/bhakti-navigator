import classes from './MainScreen.module.scss';

export const MainScreen = (props) => {
  return (
    <div className={classes.MainScreen}>
      <div className={classes.BgBigCircle} />
      <div className={classes.BgSmallCircle} />

      <div className={classes.SiteWrap}>
        <div className={classes.Content}>
          <div className={classes.LeftSide}>
            <h1>
              Качества, ценности и видение лидера
              <br /> в ИСККОН
            </h1>

            <div className={classes.CourseInfoBlitz}>
              <div className={classes.CourseSpeaker}>Парамананда Пури дас</div>
              <div className={classes.Tags}>
                <div className={classes.TagItem}>Шрила Прабхупада</div>
                <div className={classes.TagItem}>ИСККОН</div>
                <div className={classes.TagItem}>ДИКША</div>
              </div>

              <div className={classes.TextWithIcons}>
                <div className={`${classes.Item} ${classes.Donations}`}>
                  Добровольные пожертвования
                </div>
                <div className={`${classes.Item} ${classes.Calendar}`}>
                  Длительность обучения 3 дня
                </div>
              </div>
            </div>
          </div>

          <div className={classes.RightSide}>
            <div className={classes.CourseInfoExtended}>
              <div className={`${classes.Icon} ${classes.Sadhusanga}`} />
              <div className={classes.Place}>Бхакти-центр (Москва)</div>
              <div className={classes.Type}>Очные встречи (Москва)</div>
              <div className={classes.BriefDescription}>
                Краткое обяснение о формоте обучения может занимать 2 - 4 строчки.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
