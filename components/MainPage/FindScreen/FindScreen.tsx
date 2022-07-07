import Link from 'next/link';
import classes from './FindScreen.module.scss';
import { CoursesList } from '../../CommonComponents/CoursesList/CoursesList';
import { getCategoryData, getLink, getPostsList } from '../../../helpers/helpers';
import { ServerData } from '../../../interfaces/interfaces';

export const FindScreen = (props) => {
  const { dataPosts, dataCategories }: ServerData = props;
  const coursesCategory = getCategoryData(dataCategories, 'courses');
  const courses = getPostsList(dataPosts, coursesCategory?.id);

  const list = courses.map((item) => {
    const { title, acf, link } = item;
    const { speaker, location, format, theme, bhakti_level } = acf;

    return {
      title: title.rendered,
      speaker,
      location,
      format,
      theme,
      bhakti_level,
      link: getLink(link),
    };
  });

  const attrs = {
    columnsCount: 3,
    list,
  };

  return (
    <div className={classes.FindScreen} id='find'>
      <div className={classes.SiteWrap}>
        <h2>Найти</h2>

        <div className={classes.AboutText}>
          В{' '}
          <Link href='/catalog/courses'>
            <a>Каталоге</a>
          </Link>{' '}
          представлены образовательные программы и преподаватели по разным темам, дисциплинам и для
          разных ступеней изучения. Воспользуйтесь фильтрами, чтобы найти тот курс, который вы
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
  );
};
