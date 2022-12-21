import classes from './MaterialsList.module.scss';
import { MaterialItem } from './MaterialItem/MaterialItem';
import { getLink } from '../../../helpers/helpers';

export const MaterialsList = (props) => {
  const { list = [] } = props;
  return (
    <div className={classes.Grid}>
      {list.length
        ? list.map((item) => {
            const { title, recordACF, materialACF, link, id } = item;
            const { mainTheme, bhaktiLevel, materialType, author } = recordACF || materialACF;

            const attrs = {
              id,
              title,
              link: getLink(link),
              author,
              mainTheme,
              materialType,
              bhaktiLevel,
            };

            return <MaterialItem key={id} {...attrs} />;
          })
        : null}
    </div>
  );
};
