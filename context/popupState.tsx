import { useState } from 'react';
import { PopupContext } from './popupContext';

export const PopupState = ({ children }) => {
  const [popupVideo, setPopupVideo] = useState({
    state: false,
    link: '',
    ref: null,
  });

  const [popupQuestionForm, setPopupQuestionForm] = useState({
    state: false,
  });

  return (
    <PopupContext.Provider
      value={{
        popupVideo,
        setPopupVideo,
        popupQuestionForm,
        setPopupQuestionForm,
      }}
    >
      {children}
    </PopupContext.Provider>
  );
};
