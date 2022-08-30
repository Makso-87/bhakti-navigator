import classes from './Quote.module.scss';

export const Quote = ({ content }) => {
  return (
    <div className={classes.Quote}>
      <div className={classes.SiteWrap}>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  );
};
