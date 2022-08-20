import classes from './CourseItem.module.scss';
import Link from 'next/link';
import cn from 'classnames';

export const CourseItem = (props) => {
  const { title, speaker, location, format, theme, bhakti_level, link, columnsCount = 3 } = props;

  const classesTileItem = cn(classes.TileItem, {
    [classes.BeforeShraddha]: bhakti_level?.value === 'before_shraddha',
    [classes.Shraddha]: bhakti_level?.value === 'shraddha',
    [classes.Sadhusanga]: bhakti_level?.value === 'sadhu_sanga',
    [classes.BhadjanaKriya]: bhakti_level?.value?.includes('bhadjana_kriya'),
    [classes.AnarthaNivritti]: bhakti_level?.value === 'anartha_nivritti',
  });

  const classesCell = cn(classes.Cell, {
    [classes.Width50]: columnsCount === 2,
    [classes.Width33]: columnsCount === 3,
  });

  return (
    <div className={classesCell}>
      <Link href={'/catalog/courses/[name]'} as={link}>
        <a>
          <div className={classesTileItem}>
            <div className={classes.Name}>{title}</div>

            <div className={classes.Author}>{speaker}</div>

            <div className={classes.Location}>
              <span>{location}</span>
            </div>

            <div className={classes.Info}>
              <div className={classes.InfoItem}>
                <div className={classes.InfoItemName}>Формат:</div>
                <div className={`${classes.InfoItemValue} ${classes.Online}`}>{format?.label}</div>
              </div>

              <div className={classes.InfoItem}>
                <div className={classes.InfoItemName}>Тема:</div>
                <div className={classes.InfoItemValue}>{theme}</div>
              </div>
            </div>

            <div className={classes.LocationLogo}>
              <div className={classes.Logo} />
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};
