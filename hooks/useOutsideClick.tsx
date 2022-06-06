import { RefObject, useEffect } from 'react';

// nature of ref is unknown
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useOutsideClick: (ref: RefObject<any>, cb: () => void) => void = (
  ref,
  cb
) => {
  useEffect(() => {
    /**
     * cb if clicked on outside of element
     */
    const handleClickOutside = (e: MouseEvent): void => {
      if (ref.current && !ref.current.contains(e.target)) {
        cb();
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
