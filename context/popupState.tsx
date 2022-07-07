import { useState } from 'react';
import { PopupContext } from './popupContext';

export const PopupState = ({ children }) => {
  const [popupVideo, setPopupVideo] = useState({
    state: false,
    link: '',
    ref: null,
  });

  return (
    <PopupContext.Provider
      value={{
        popupVideo,
        setPopupVideo,
      }}
    >
      {children}
    </PopupContext.Provider>
  );
};
