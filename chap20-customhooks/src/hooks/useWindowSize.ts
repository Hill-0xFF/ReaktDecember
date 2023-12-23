import { useEffect, useState } from 'react';

export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(function () {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    handleResize();
    // console.log(windowSize);
    window.addEventListener('resize', handleResize);

    // cleanup code
    function cleanUp() {
      console.log('Runs if a useEffect dependency changes');
      window.removeEventListener('resize', handleResize);
    }
    return cleanUp;
  }, []);
  return windowSize;
}
