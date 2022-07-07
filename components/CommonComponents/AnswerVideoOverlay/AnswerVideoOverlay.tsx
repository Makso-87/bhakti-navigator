import classes from './AnswerVideoOverlay.module.scss';
import { PopupContext } from '../../../context/popupContext';
import { useContext } from 'react';

export const AnswerVideoOverlay = (props) => {
  const { videoUrl, ref } = props;
  const popupContextData = useContext(PopupContext);

  const onClose = () => {
    popupContextData.setPopupVideo({ state: false, link: '', ref: null });
  };

  return (
    <div ref={ref} className={classes.AnswerVideoOverlay}>
      <div className={classes.VideoContainer}>
        <iframe
          src={videoUrl}
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        />

        <div onClick={onClose} className={classes.Close} />
      </div>
    </div>
  );
};
