import ScrollableAnchor from 'react-scrollable-anchor';
import { configureAnchors } from 'react-scrollable-anchor';
import classes from './Feedback.module.scss';
import pagesStore from '../../../store/pagesStore';
import { formatTelegramLink, formatWhatsappLink } from '../../../helpers/helpers';

configureAnchors({ offset: -100, scrollDuration: 400 });

export const Feedback = ({
  title = '',
  name = '',
  email = '',
  twitter = '',
  facebook = '',
  instagram = '',
  telegram = '',
  vkontakte = '',
  odnoklassniki = '',
  whatsapp = '',
}: {
  title?: string;
  name?: string;
  email?: string;
  twitter?: string;
  facebook?: string;
  instagram?: string;
  telegram?: string;
  vkontakte?: string;
  odnoklassniki?: string;
  whatsapp?: string;
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
              {email !== '' ? (
                <a
                  href={`mailto:${email}`}
                  className={`${classes.SocialItem} ${classes.Email}`}
                  target='_blank'
                  rel='noreferrer'
                />
              ) : null}
              {twitter !== '' ? (
                <a
                  href={twitter}
                  className={`${classes.SocialItem} ${classes.Twitter}`}
                  target='_blank'
                  rel='noreferrer'
                />
              ) : null}
              {facebook !== '' ? (
                <a
                  href={facebook}
                  className={`${classes.SocialItem} ${classes.Facebook}`}
                  target='_blank'
                  rel='noreferrer'
                />
              ) : null}
              {instagram !== '' ? (
                <a
                  href={instagram}
                  className={`${classes.SocialItem} ${classes.Instagram}`}
                  target='_blank'
                  rel='noreferrer'
                />
              ) : null}
              {telegram !== '' ? (
                <a
                  href={`https://t.me/${formatTelegramLink(telegram)}`}
                  className={`${classes.SocialItem} ${classes.Telegram}`}
                  target='_blank'
                  rel='noreferrer'
                />
              ) : null}
              {vkontakte !== '' ? (
                <a
                  href={vkontakte}
                  className={`${classes.SocialItem} ${classes.Vkontakte}`}
                  target='_blank'
                  rel='noreferrer'
                />
              ) : null}
              {odnoklassniki !== '' ? (
                <a
                  href={odnoklassniki}
                  className={`${classes.SocialItem} ${classes.Odnoklassniki}`}
                  target='_blank'
                  rel='noreferrer'
                />
              ) : null}
              {whatsapp !== '' ? (
                <a
                  href={`https://wa.me/${formatWhatsappLink(whatsapp)}`}
                  className={`${classes.SocialItem} ${classes.Whatsapp}`}
                  target='_blank'
                  rel='noreferrer'
                />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </ScrollableAnchor>
  );
};
