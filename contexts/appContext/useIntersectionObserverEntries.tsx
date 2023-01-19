import { useContext, useMemo } from 'react';
import appContext from '.';
import { AppContextInterface } from './app.types';

type UseHandleSetAppResult =
  AppContextInterface['setIntersectionObserverEntries'];

const useIntersectionObserverEntries = (): UseHandleSetAppResult => {
  const { setIntersectionObserverEntries } = useContext(appContext);
  return useMemo(
    () => setIntersectionObserverEntries,
    [setIntersectionObserverEntries]
  );
};

export default useIntersectionObserverEntries;
