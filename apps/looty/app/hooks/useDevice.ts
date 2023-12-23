"use client";

import { useState, useEffect } from "react";

 
const useMediaQuery = () => {
  const [isMobile, setIsMobile] = useState(false);
 
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);
 
    const handler = () => setIsMobile(mediaQuery.matches);
    mediaQuery.addListener(handler);
 
    return () => mediaQuery.removeListener(handler);
  }, [isMobile, setIsMobile]);
 
  return isMobile;
};

export default useMediaQuery;