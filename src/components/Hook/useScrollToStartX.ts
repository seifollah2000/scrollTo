"use client"
import React, { RefObject, useRef } from 'react';

// type
interface ScrollHandlerHook {
  containerRef: RefObject<HTMLDivElement>;
  nextHandler: (id: number | string) => void;
}

function useScrollToStartX(): ScrollHandlerHook {
  const containerRef = useRef<HTMLDivElement>(null);

  // nextHandler callback
  const nextHandler = (id: number | string) => {
    const scrollToElement = document.getElementById(`scroll-item-${id}`);
    if (scrollToElement && containerRef.current) {
      const container = containerRef.current;
      const scrollTo = scrollToElement.offsetLeft;

      container.scrollTo({
        left: scrollTo-18,
        behavior: 'smooth',
      });
    }
  };
  return { nextHandler, containerRef };
}

export default useScrollToStartX;
