import classes from './CourseItem.module.scss';
import Link from 'next/link';
import cn from 'classnames';
import { getUniqBhakyiLevels } from '../../../../helpers/helpers';

export const CourseItem = (props) => {
  const { title, speaker, location, format, theme, bhakti_level, link, columnsCount = 3 } = props;

  const classesCell = cn(classes.Cell, {
    [classes.Width50]: columnsCount === 2,
    [classes.Width33]: columnsCount === 3,
  });

  const bhaktiLevelUniq = getUniqBhakyiLevels(bhakti_level);

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

            <div className={classes.BookmarksContainer}>
              {bhaktiLevelUniq?.length
                ? bhaktiLevelUniq.map((item) => {
                    const { id, title, acf } = item;

                    const classesBookmark = cn(classes.Bookmark, {
                      [classes.BeforeShraddha]: acf?.value === 'before_shraddha',
                      [classes.Shraddha]: acf?.value === 'shraddha',
                      [classes.Sadhusanga]: acf?.value === 'sadhu_sanga',
                      [classes.BhadjanaKriya]: acf?.value?.includes('bhadjana_kriya'),
                      [classes.AnarthaNivritti]: acf?.value === 'anartha_nivritti',
                    });

                    return (
                      <div key={id} className={classesBookmark}>
                        <div className={classes.TriangleTop} />
                        <div className={classes.TriangleBottom} />
                        <div className={classes.Text}>
                          {title.replace(/(\sначало|\sпродолжение)/g, '')}
                        </div>
                      </div>
                    );
                  })
                : null}
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};
