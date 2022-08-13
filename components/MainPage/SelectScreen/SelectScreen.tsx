import classes from './SelectScreen.module.scss';
import Link from 'next/link';
import road from '../../../images/road.svg';
import ScrollableAnchor from 'react-scrollable-anchor';
import { configureAnchors } from 'react-scrollable-anchor';

configureAnchors({ offset: -100, scrollDuration: 400 });

export const SelectScreen = () => {
  return (
    <ScrollableAnchor id={'select'}>
      <div className={classes.SelectScreen}>
        <div className={classes.SiteWrap}>
          <div className={classes.Content}>
            <div className={classes.LeftSide}>
              <h2>Выбрать</h2>

              <div className={classes.AboutText}>
                Чтобы помочь практикующим вайшнавам, а также наставникам сориентироваться в большом
                количестве курсов, школ и образовательных проектов, мы разработали{' '}
                <Link href='#'>
                  <a>дорожную карту</a>
                </Link>
                , на которой темы, рекомендуемые для изучения, расположены в соответствии со
                ступенями бхакти.
              </div>

              <div className={classes.Note}>
                Узнайте свою отправную точку и постройте индивидуальный маршрут.
              </div>

              <div className={classes.Button}>
                <Link href='#'>
                  <a>Построить маршрут</a>
                </Link>
              </div>
            </div>

            <div className={classes.RightSide}>
              <div className={classes.Img} style={{ backgroundImage: `url(${road.src})` }} />
            </div>
          </div>
        </div>
      </div>
    </ScrollableAnchor>
  );
};
