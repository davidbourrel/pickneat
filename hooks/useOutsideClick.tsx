import { RefObject, useEffect } from 'react';

type Handler = (event: MouseEvent) => void;

const useOutsideClick = <T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  cb: Handler
): void => {
  useEffect(() => {
    /**
     * cb if clicked on outside of element
     */
    const handleClickOutside = (e: MouseEvent): void => {
      const element = ref?.current;

      if (element && !element.contains(e.target as Node)) {
        cb(e);
      }
    };

    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, cb]);
};
export default useOutsideClick;
