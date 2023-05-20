import { useState, useEffect } from 'react';

function getIsMobile() {
  const { innerWidth: width } = window;
  return {
    isMobile: width < 700,
  };
}

export default function useIsMobile() {
  const [windowDimensions, setWindowDimensions] = useState(getIsMobile());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getIsMobile());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}
