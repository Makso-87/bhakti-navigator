import classes from './Feedback.module.scss';
import pagesStore from '../../../store/pagesStore';

export const Feedback = (props) => {
  const { currentPage } = pagesStore;
  return (
    <div className={classes.FeedbackAndSocial}>
      <div className={classes.SiteWrap}>
        <div className={classes.Top}>
          {/*{currentPage === 'teachers' ? (*/}
          <div className={classes.Text}>Связаться с организатором</div>
          {/*) : null}*/}

          {/*{currentPage === 'teachers' ? */}
          {/*<div className={classes.Text}>Способы связи</div>*/}
          {/*: null}*/}
        </div>
        <div className={classes.Bottom}>
          <div className={classes.Text}>Бхакти-центр</div>

          <div className={classes.Social}>
            <a href='#' className={`${classes.SocialItem} ${classes.Email}`} />
            <a href='#' className={`${classes.SocialItem} ${classes.Twitter}`} />
            <a href='#' className={`${classes.SocialItem} ${classes.Facebook}`} />
            <a href='#' className={`${classes.SocialItem} ${classes.Instagram}`} />
          </div>
        </div>
      </div>
    </div>
  );
};
