import classes from './MainContent.module.scss';

export const MainContent = ({ content }) => {
  return (
    <div className={classes.MainContent}>
      <div className={classes.SiteWrap}>
        <div dangerouslySetInnerHTML={{ __html: content }}></div>
      </div>
    </div>
  );
};
