import classes from './FAQItem.module.scss';
import { PopupContext } from '../../../../context/popupContext';
import { useContext, useRef } from 'react';

export const FAQItem = (props) => {
  const { video_url, imgUrl, index, title, author, video_duration } = props;
  const popupContextData = useContext(PopupContext);
  const ref = useRef(null);

  const onOpenVideoPopup = () => {
    popupContextData.setPopupVideo({ state: true, link: video_url, ref });
  };

  return (
    <>
      <div onClick={onOpenVideoPopup} className={classes.TileImageItem} data-video-url={video_url}>
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
                <span className={classes.Value}>{video_duration}</span>
              </div>
            </div>
          </figcaption>
        </figure>
      </div>
    </>
  );
};
