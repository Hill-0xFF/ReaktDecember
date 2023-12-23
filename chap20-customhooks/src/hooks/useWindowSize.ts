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
    // function cleanUp() {
    //   console.log('Runs if a useEffect dependency changes');
    //   window.removeEventListener('resize', handleResize);
    // }
    // return cleanUp;
    /**
     * Some code as above, just an anonymous function return at the end of
     * a hook, which indicates a cleanup function/operation (to prevent memory leaks!)
     */
    return function () {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return windowSize;
}
