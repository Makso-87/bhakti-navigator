import classes from './MaterialItem.module.scss';
import cn from 'classnames';
import { Bookmarks } from '../../Bookmarks/Bookmarks';

export const MaterialItem = (props) => {
  const { id, title, link, author, mainTheme, materialType, bhaktiLevel } = props;
  const { title: typeName, materialsTypeACF } = materialType ?? {};
  const { value: typeValue = '' } = materialsTypeACF || {};

  const classesGridItem = cn(classes.GridItem, {
    [classes.Book]: typeValue === 'text',
    [classes.File]: typeValue === 'file',
    [classes.Audio]: typeValue === 'audio',
    [classes.Video]: typeValue === 'video',
    [classes.AudioAndVideo]: typeValue === 'audio_and_video',
  });

  return (
    <div key={id} className={classes.Cell}>
      <a href={link}>
        <div className={classesGridItem}>
          <div className={classes.Name}>{title}</div>

          <div className={classes.Author}>
            <span className={classes.AuthorName}>Автор: </span>
            <span className={classes.AuthorValue}>{author !== null ? author?.title : ''}</span>
          </div>

          <div className={classes.Info}>
            <div className={classes.InfoItem}>
              <div className={classes.InfoItemName}>Тема: </div>
              <div className={classes.InfoItemValue}>{mainTheme ? mainTheme?.title : ''}</div>
            </div>
          </div>

          <div className={classes.MaterialType} />

          {bhaktiLevel ? <Bookmarks bhaktiLevelsList={bhaktiLevel} /> : null}
        </div>
      </a>
    </div>
  );
};
