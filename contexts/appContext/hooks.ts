import { useContext } from 'react';
import { AppContext, AppDispatchContext } from './contexts';

export const useApp = () => useContext(AppContext);
export const useAppDispatch = () => useContext(AppDispatchContext);
