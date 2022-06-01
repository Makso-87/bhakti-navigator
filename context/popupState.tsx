import { useState } from 'react';
import { PopupContext } from './popupContext';

export const PopupState = ({ children }) => {
  const [popupVideo, setPopupVideo] = useState({
    state: false,
    link: false,
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
