import classes from './MaterialItem.module.scss';
import cn from 'classnames';

export const MaterialItem = (props) => {
  const { id, title, link, author, theme, type, bhakti_level } = props;

  const classesGridItem = cn(classes.GridItem, {
    [classes.BeforeShraddha]: bhakti_level.value === 'before_shraddha',
    [classes.Shraddha]: bhakti_level.value === 'shraddha',
    [classes.Sadhusanga]: bhakti_level.value === 'sadhu_sanga',
    [classes.BhadjanaKriya]: bhakti_level.value.includes('bhadjana_kriya'),
    [classes.Book]: type.value === 'text',
    [classes.File]: type.value === 'file',
    [classes.Audio]: type.value === 'audio',
    [classes.Video]: type.value === 'video',
  });

  return (
    <div key={id} className={classes.Cell}>
      <a href={link}>
        <div className={classesGridItem}>
          <div className={classes.Name}>{title}</div>

          <div className={classes.Author}>
            <span className={classes.AuthorName}>Автор: </span>
            <span className={classes.AuthorValue}>{author}</span>
          </div>

          <div className={classes.Info}>
            <div className={classes.InfoItem}>
              <div className={classes.InfoItemName}>Тема: </div>
              <div className={classes.InfoItemValue}>{theme}</div>
            </div>
          </div>

          <div className={classes.MaterialType} />

          <div className={classes.LocationLogo}>
            <div className={classes.Logo} />
          </div>
        </div>
      </a>
    </div>
  );
};
