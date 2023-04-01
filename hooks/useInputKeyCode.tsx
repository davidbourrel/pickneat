import { useState, useEffect } from 'react';

const useInputKeyCode: () => string = () => {
  const [key, setKey] = useState(null as unknown as string);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => setKey(e.key);
    const handleKeyUp = () => setKey(null as unknown as string);

    global.addEventListener('keydown', handleKeyDown);
    global.addEventListener('keyup', handleKeyUp);

    return () => {
      global.removeEventListener('keydown', handleKeyDown);
      global.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return key;
};
export default useInputKeyCode;
