import ScrollableAnchor from 'react-scrollable-anchor';
import { configureAnchors } from 'react-scrollable-anchor';
import classes from './Feedback.module.scss';
import pagesStore from '../../../store/pagesStore';

configureAnchors({ offset: -100, scrollDuration: 400 });

export const Feedback = ({
  title = '',
  name = '',
  email = '#',
  twitter = '#',
  facebook = '#',
  instagram = '#',
}) => {
  const { currentPage } = pagesStore;

  return (
    <ScrollableAnchor id={'contact-organizer'}>
      <div className={classes.FeedbackAndSocial}>
        <div className={classes.SiteWrap}>
          <div className={classes.Top}>
            {/*{currentPage === 'teachers' ? (*/}
            <div className={classes.Text}>{title}</div>
            {/*) : null}*/}

            {/*{currentPage === 'teachers' ? */}
            {/*<div className={classes.Text}>Способы связи</div>*/}
            {/*: null}*/}
          </div>
          <div className={classes.Bottom}>
            <div className={classes.Text}>{name}</div>

            <div className={classes.Social}>
              <a href={email} className={`${classes.SocialItem} ${classes.Email}`} />
              <a href={twitter} className={`${classes.SocialItem} ${classes.Twitter}`} />
              <a href={facebook} className={`${classes.SocialItem} ${classes.Facebook}`} />
              <a href={instagram} className={`${classes.SocialItem} ${classes.Instagram}`} />
            </div>
          </div>
        </div>
      </div>
    </ScrollableAnchor>
  );
};
