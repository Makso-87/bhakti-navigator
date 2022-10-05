import classes from './CourseItem.module.scss';
import Link from 'next/link';
import cn from 'classnames';
import { getUniqBhakyiLevels } from '../../../../helpers/helpers';
import { Bookmarks } from '../../Bookmarks/Bookmarks';

export const CourseItem = (props) => {
  const { title, speaker, location, format, theme, bhaktiLevel, link, columnsCount = 3 } = props;
  const [, formatLabel] = format || [];

  const classesCell = cn(classes.Cell, {
    [classes.Width50]: columnsCount === 2,
    [classes.Width33]: columnsCount === 3,
  });

  return (
    <div className={classesCell}>
      <Link href={'/catalog/courses/[name]'} as={link}>
        <a>
          <div className={classes.TileItem}>
            <div className={classes.Name}>{title}</div>

            <div className={classes.Author}>{speaker}</div>

            <div className={classes.Location}>
              <span>{location}</span>
            </div>

            <div className={classes.Info}>
              <div className={classes.InfoItem}>
                <div className={classes.InfoItemName}>Формат:</div>
                <div className={`${classes.InfoItemValue} ${classes.Online}`}>{formatLabel}</div>
              </div>

              <div className={classes.InfoItem}>
                <div className={classes.InfoItemName}>Тема:</div>
                <div className={classes.InfoItemValue}>{theme}</div>
              </div>
            </div>

            <div className={classes.LocationLogo}>
              <div className={classes.Logo} />
            </div>

            <Bookmarks bhaktiLevelsList={bhaktiLevel} />
          </div>
        </a>
      </Link>
    </div>
  );
};
