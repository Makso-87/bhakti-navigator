import classes from './MaterialsList.module.scss';
import { MaterialItem } from './MaterialItem/MaterialItem';

export const MaterialsList = (props) => {
  const { list = [] } = props;
  return (
    <div className={classes.Grid}>
      {list.length
        ? list.map((item) => {
            const { id, title, link, author, mainTheme, type, bhaktiLevel } = item;
            const attrs = {
              id,
              title,
              link,
              author,
              mainTheme,
              type,
              bhaktiLevel,
            };

            return <MaterialItem key={id} {...attrs} />;
          })
        : null}
    </div>
  );
};
