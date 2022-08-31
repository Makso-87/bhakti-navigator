import classes from './MaterialItem.module.scss';
import cn from 'classnames';
import { Bookmarks } from '../../Bookmarks/Bookmarks';

export const MaterialItem = (props) => {
  const { id, title, link, author, theme, type, bhakti_level } = props;

  const classesGridItem = cn(classes.GridItem, {
    [classes.Book]: type?.value === 'text',
    [classes.File]: type?.value === 'file',
    [classes.Audio]: type?.value === 'audio',
    [classes.Video]: type?.value === 'video',
    [classes.AudioAndVideo]: type?.value === 'audio_and_video',
  });

  return (
    <div key={id} className={classes.Cell}>
      <a href={link}>
        <div className={classesGridItem}>
          <div className={classes.Name}>{title}</div>

          <div className={classes.Author}>
            <span className={classes.AuthorName}>Автор: </span>
            <span className={classes.AuthorValue}>{author?.title}</span>
          </div>

          <div className={classes.Info}>
            <div className={classes.InfoItem}>
              <div className={classes.InfoItemName}>Тема: </div>
              <div className={classes.InfoItemValue}>{theme}</div>
            </div>
          </div>

          <div className={classes.MaterialType} />

          <Bookmarks bhaktiLevelsList={bhakti_level} />
        </div>
      </a>
    </div>
  );
};
