import { useEffect, useMemo, useState } from 'react';
import isEqual from 'utils/isEqual';
import useInputKeyCode from './useInputKeyCode';

const konamiCode = [
  'arrowup',
  'arrowdown',
  'arrowleft',
  'arrowright',
  'a',
  'b',
];

const useKonami = (): void => {
  const key = useInputKeyCode();
  const [keyStack, setKeyStack] = useState([] as string[]);
  const isKonami = useMemo(
    () =>
      keyStack.length === konamiCode.length && isEqual(keyStack, konamiCode),
    [keyStack]
  );

  useEffect(() => {
    setKeyStack((prevStack) => {
      if (key === undefined || key === null) {
        return prevStack;
      }
      const lowKey = key.toLowerCase();
      if (konamiCode.includes(lowKey)) {
        if (konamiCode[prevStack.length] === lowKey) {
          return [...prevStack, lowKey];
        }
        if (konamiCode[0] === lowKey) {
          return [lowKey];
        }
      }
      return [];
    });
  }, [key]);

  useEffect(() => {
    if (isKonami) {
      /** TODO : Make the animation when konami code is trigger */
      // console.log('*** KONAMIIIIII ***');
    }
  }, [isKonami]);
};

export default useKonami;
