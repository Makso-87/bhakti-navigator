import classes from './Tags.module.scss';

export const Tags = ({ tags }) => {
  return (
    <div className={classes.Tags}>
      {tags.length
        ? tags.map((item) => {
            return (
              <div key={item.id} className={classes.TagItem}>
                {item?.title}
              </div>
            );
          })
        : null}
    </div>
  );
};
