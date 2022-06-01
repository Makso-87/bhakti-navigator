import Link from 'next/link';
import classes from './FindScreen.module.scss';
import { CoursesList } from '../../CommonComponents/CoursesList/CoursesList';

export const FindScreen = () => {
  return (
    <div className={classes.FindScreen} id='find'>
      <div className={classes.SiteWrap}>
        <h2>Найти</h2>

        <div className={classes.AboutText}>
          В{' '}
          <Link href='/catalog'>
            <a>Каталоге</a>
          </Link>{' '}
          представлены образовательные программы и преподаватели по разным темам, дисциплинам и для
          разных ступеней изучения. Воспользуйтесь фильтрами, чтобы найти тот курс, который вы
          хотели бы пройти, или ведущего, у которого хотели бы учиться.
        </div>

        <div className={classes.Note}>*Каталог актуален для разных регионов России</div>

        <CoursesList columnsCount={3} />

        <div className={classes.GoToBlog}>
          <Link href='/catalog'>
            <a>Перейти в Каталог</a>
          </Link>
        </div>
      </div>
    </div>
  );
};
