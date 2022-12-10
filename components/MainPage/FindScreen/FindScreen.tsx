import Link from 'next/link';
import ScrollableAnchor from 'react-scrollable-anchor';
import { configureAnchors } from 'react-scrollable-anchor';
import classes from './FindScreen.module.scss';
import { CoursesList } from '../../CommonComponents/CoursesList/CoursesList';
// import { getCategoryData, getPostsList } from '../../../helpers/helpers';
import { ServerData } from '../../../interfaces/interfaces';

configureAnchors({ offset: -100, scrollDuration: 400 });

export const FindScreen = (props) => {
  const { dataPosts }: ServerData = props;
  const { courses = [] } = dataPosts;

  const attrs = {
    columnsCount: 3,
    list: courses,
  };

  return (
    <ScrollableAnchor id={'find'}>
      <div className={classes.FindScreen}>
        <div className={classes.SiteWrap}>
          <h2>Найти</h2>

          <div className={classes.AboutText}>
            В{' '}
            <Link href='/catalog/courses'>
              <a>Каталоге</a>
            </Link>{' '}
            представлены образовательные программы и преподаватели по разным темам, дисциплинам и
            для разных ступеней изучения. Воспользуйтесь фильтрами, чтобы найти тот курс, который вы
            хотели бы пройти, или ведущего, у которого хотели бы учиться.
          </div>

          <div className={classes.Note}>*Каталог актуален для разных регионов России</div>

          <CoursesList {...attrs} />

          <div className={classes.GoToBlog}>
            <Link href='/catalog/courses'>
              <a>Перейти в Каталог</a>
            </Link>
          </div>
        </div>
      </div>
    </ScrollableAnchor>
  );
};
