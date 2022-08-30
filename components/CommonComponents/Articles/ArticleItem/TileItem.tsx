import Link from 'next/link';
import classes from './TileItem.module.scss';
import { getLink } from '../../../../helpers/helpers';

export const TileItem = (props) => {
  const { index, link, imgUrl, title, article_lead, readingTime } = props;

  return (
    <div className={`${classes.TileItem} ${index % 2 === 0 ? classes.TypeOne : classes.TypeTwo}`}>
      <Link href={getLink(link)}>
        <a>
          <figure>
            <div className={classes.ImgContainer}>
              <div className={classes.Img} style={{ backgroundImage: `url(${imgUrl})` }} />
            </div>

            <figcaption>
              <div className={classes.Title}>
                <div className={classes.Text}>{title}</div>
                <div className={classes.Note} dangerouslySetInnerHTML={{ __html: article_lead }} />
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
