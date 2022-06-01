import Link from 'next/link';
import classes from './TileItem.module.scss';
import { getLink } from '../../../../helpers/helpers';

export const TileItem = (props) => {
  const { index, link, imgUrl, title, note, readingTime } = props;
  const handledLink = getLink(link);

  return (
    <div className={`${classes.TileItem} ${index % 2 === 0 ? classes.TypeOne : classes.TypeTwo}`}>
      <Link href={handledLink}>
        <a>
          <figure>
            <div className={classes.ImgContainer}>
              <div className={classes.Img} style={{ backgroundImage: `url(${imgUrl})` }} />
            </div>

            <figcaption>
              <div className={classes.Title}>
                <span className={classes.Text}>{title}</span>
                <br />
                <span className={classes.Note}>{note}</span>
              </div>

              <div className={classes.Time}>
                Время чтения <span>~ {readingTime} мин.</span>
              </div>
            </figcaption>
          </figure>
        </a>
      </Link>
    </div>
  );
};
