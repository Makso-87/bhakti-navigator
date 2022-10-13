import classes from './Quote.module.scss';

export const Quote = ({ content, className = '' }) => {
  return (
    <div className={`${classes.Quote} ${className}`}>
      <div className={classes.SiteWrap}>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  );
};
