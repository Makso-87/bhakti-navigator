import classes from './Bookmarks.module.scss';
import cn from 'classnames';
import { getUniqBhakyiLevels } from '../../../helpers/helpers';

export const Bookmarks = ({ bhaktiLevelsList }) => {
  const bhaktiLevelUniq = getUniqBhakyiLevels(bhaktiLevelsList);

  return (
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
                  {title?.replace(/(\sначало|\sпродолжение)/g, '')}
                </div>
              </div>
            );
          })
        : null}
    </div>
  );
};
