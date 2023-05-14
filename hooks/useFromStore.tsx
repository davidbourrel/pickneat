import { useEffect, useState } from 'react';

// ZUSTAND - For all components that use a persisted state in the localStorage, it is necessary to create a local state with useState.
export default function useFromStore<T, F>(
  store: (callback: (state: T) => unknown) => unknown,
  storeCallback: (state: T) => F
) {
  const stateOfStore = store(storeCallback) as F;
  const [state, setState] = useState<F>();

  useEffect(() => {
    setState(stateOfStore);
  }, [stateOfStore]);

  return state;
}
