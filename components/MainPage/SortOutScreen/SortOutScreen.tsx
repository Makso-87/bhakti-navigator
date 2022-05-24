import classes from './SortOutScreen.module.scss';
import Link from 'next/link';
import { Articles } from '../../CommonComponents/Articles/Articles';

export const SortOutScreen = () => {
  return (
    <div className={classes.SortOutScreen} id='sort-order'>
      <div className={classes.SiteWrap}>
        <h2>Разобраться</h2>

        <div className={classes.AboutText}>
          В{' '}
          <Link href={'/navigator/blog_reading.php'}>
            <a>Блоге</a>
          </Link>{' '}
          вместе со старшими вайшнавами и духовными учителями мы пытаемся разобраться в тонкостях
          духовного образования, чтобы обрести правильное понимание, настроение и продвигаться по
          пути бхакти так, как этому учит Шрила Прабхупада.
        </div>

        <Articles />

        <div className={classes.GoToBlog}>
          <Link href='/navigator/blog_reading.php'>
            <a>Перейти в Блог</a>
          </Link>
        </div>
      </div>
    </div>
  );
};
