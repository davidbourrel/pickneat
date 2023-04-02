import { useContext } from 'react';
import { AppDispatchContext } from '.';

export const useIntersectionObserverEntries = () =>
  useContext(AppDispatchContext);
