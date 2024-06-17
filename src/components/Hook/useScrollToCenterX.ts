import React, { RefObject, useRef } from 'react';

interface ScrollHandlerHook {
  containerRef: RefObject<HTMLDivElement>;
  ClickHandler: (id: number | string) => void; //
}

function useScrollToCenterX(): ScrollHandlerHook {
  const containerRef = useRef<HTMLDivElement>(null);

  // ClickHandler

  const ClickHandler = (id: number | string): void => {
    const scrollToElement = document.getElementById(`scroll-item-${id}`);
    if (scrollToElement && containerRef.current) {
      const container = containerRef.current;
      const itemOffset = scrollToElement.offsetLeft;
      const containerWidth = container.offsetWidth;
      const itemWidth = scrollToElement.offsetWidth;
      const scrollTo = itemOffset - (containerWidth - itemWidth) / 2;
      container.scrollTo({
        left: scrollTo,
        behavior: 'smooth',
      });
    }
  };

  return { containerRef, ClickHandler };
}

export default useScrollToCenterX;
