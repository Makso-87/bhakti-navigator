import classes from './FAQItem.module.scss';
import { PopupContext } from '../../../../context/popupContext';
import { useContext, useRef } from 'react';
import { lockSite } from '../../../../helpers/helpers';

export const FAQItem = (props) => {
  const { videoUrl, imgUrl, index, title, author, videoDuration } = props;
  const popupContextData = useContext(PopupContext);
  const ref = useRef(null);

  const onOpenVideoPopup = () => {
    lockSite();
    popupContextData.setPopupVideo({ state: true, link: videoUrl, ref });
  };

  return (
    <>
      <div onClick={onOpenVideoPopup} className={classes.TileImageItem} data-video-url={videoUrl}>
        <figure>
          <div className={classes.ImgContainer}>
            <div className={classes.Img} style={{ backgroundImage: `url(${imgUrl})` }} />
          </div>

          <figcaption>
            <div className={classes.Title}>
              QA#{index + 1} | {title}
            </div>

            <div className={classes.Info}>
              <div className={classes.InfoItem}>
                <span className={classes.Name}>Автор: </span>
                <span className={classes.Value}>{author}</span>
              </div>

              <div className={classes.InfoItem}>
                <span className={classes.Name}>Продолжительность: </span>
                <span className={classes.Value}>{videoDuration}</span>
              </div>
            </div>
          </figcaption>
        </figure>
      </div>
    </>
  );
};
