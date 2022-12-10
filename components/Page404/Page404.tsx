import classes from './Page404.module.scss';
import Link from 'next/link';

export const Page404 = () => {
  return (
    <div className={classes.Page404}>
      <h1 className={classes.Title}>Ошибка 404</h1>
      <div className={classes.Text}>Кажется такая страница еще не проявлена в этом мире</div>

      <Link href='catalog/courses'>
        <a className={classes.Link}>Назад в проявленную реальность</a>
      </Link>
    </div>
  );
};
