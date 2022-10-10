import { createContext } from 'react';
import { PopupContextProps } from '../interfaces/interfaces';

export const PopupContext = createContext<PopupContextProps>(null);
