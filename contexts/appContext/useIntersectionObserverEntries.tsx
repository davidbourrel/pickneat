import { useContext, useMemo } from 'react';
import appContext from '.';
import { AppContext } from './app.types';

type UseHandleSetAppResult = AppContext['setIntersectionObserverEntries'];

const useIntersectionObserverEntries = (): UseHandleSetAppResult => {
  const { setIntersectionObserverEntries } = useContext(appContext);
  return useMemo(
    () => setIntersectionObserverEntries,
    [setIntersectionObserverEntries]
  );
};

export default useIntersectionObserverEntries;
