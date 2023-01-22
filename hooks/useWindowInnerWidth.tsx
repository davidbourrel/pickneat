import { useMemo, useSyncExternalStore } from 'react';

export default function useWindowInnerWidth(serverFallback = -1): number {
  const getServerSnapshot = () => serverFallback;

  const [getSnapshot, subscribe] = useMemo(() => {
    return [
      () => window.innerWidth,
      (notify: () => void) => {
        window.addEventListener('resize', notify);
        return () => {
          window.removeEventListener('resize', notify);
        };
      },
    ];
  }, []);

  return useSyncExternalStore(
    subscribe,
    // Fallback to getServerSnapshot only required for React 17
    typeof window !== 'undefined' ? getSnapshot : getServerSnapshot,
    getServerSnapshot
  );
}
