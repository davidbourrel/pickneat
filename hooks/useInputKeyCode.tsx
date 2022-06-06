import { useState, useEffect, useCallback } from 'react';

const useInputKeyCode: () => string = () => {
  const [key, setKey] = useState(null as unknown as string);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    setKey(e.key);
  }, []);
  const handleKeyUp = useCallback(() => {
    setKey(null as unknown as string);
  }, []);

  useEffect(() => {
    global.addEventListener('keydown', handleKeyDown);
    global.addEventListener('keyup', handleKeyUp);

    return () => {
      global.removeEventListener('keydown', handleKeyDown);
      global.removeEventListener('keyup', handleKeyUp);
    };
  }, [handleKeyDown, handleKeyUp]);

  return key;
};

export default useInputKeyCode;
