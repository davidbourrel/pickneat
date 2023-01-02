import { useEffect, useMemo, useState } from 'react';
import isEqual from 'utils/isEqual';
import useInputKeyCode from './useInputKeyCode';
import { Snowflake } from '../animation/snowAnimation';

const konamiCode = ['c', 'n', 'o', 'e', 'l'];

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
    const snowAnimationId = document.getElementById('snowAnimation');
    if (isKonami && !snowAnimationId) {
      /** Make the animation when konami code is trigger */
      const app = document.getElementById('app') as HTMLDivElement;
      const snowAnimation = `<div id="snowAnimation" class="snowAnimation"></div>`;
      app.insertAdjacentHTML('beforeend', snowAnimation);

      const snowAnimationId = document.getElementById('snowAnimation');
      Snowflake.init(snowAnimationId);

      if (snowAnimationId) {
        setTimeout(() => {
          snowAnimationId.remove();
        }, 10000);
      }
    }
  }, [isKonami]);
};

export default useKonami;
