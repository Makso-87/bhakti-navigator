import classes from './MaterialsList.module.scss';
import { MaterialItem } from './MaterialItem/MaterialItem';

export const MaterialsList = (props) => {
  const { list = [] } = props;
  return (
    <div className={classes.Grid}>
      {list.length
        ? list.map((item) => {
            const { id, title, link, author, theme, type, bhakti_level } = item;
            const attrs = {
              id,
              title,
              link,
              author,
              theme,
              type,
              bhakti_level,
            };

            return <MaterialItem key={id} {...attrs} />;
          })
        : null}
    </div>
  );
};
