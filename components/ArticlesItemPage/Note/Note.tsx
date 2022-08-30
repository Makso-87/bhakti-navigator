import classes from './Note.module.scss';

export const Note = ({ content }) => {
  return (
    <div className={classes.Note}>
      <div className={classes.SiteWrap}>
        <div className={classes.TextBlock} dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  );
};
