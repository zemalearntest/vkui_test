import { useCallback } from 'react';
import * as React from 'react';
import { TimeoutId } from '../../types';

/**
 * Хук определяет в каком измерении происходит скролл(в горизонтальном или вертикальном)
 */
export const useDetectScrollDirection = (boxRef: React.RefObject<HTMLDivElement>) => {
  const lastScrollLeft = React.useRef(0);
  const lastScrollTop = React.useRef(0);
  const [scrollDirection, setScrollDirection] = React.useState<'vertical' | 'horizontal' | null>(
    null,
  );

  const timeoutId = React.useRef<TimeoutId>(null);

  const updateDirection = (direction: 'vertical' | 'horizontal') => {
    setScrollDirection(direction);
    timeoutId.current = setTimeout(() => setScrollDirection(null), 200);
  };

  const onScroll = useCallback(() => {
    if (!boxRef || !boxRef.current) {
      return;
    }
    timeoutId.current && clearTimeout(timeoutId.current);

    const scrollTop = boxRef.current.scrollTop;
    const scrollLeft = boxRef.current.scrollLeft;

    if (scrollTop !== lastScrollTop.current) {
      updateDirection('vertical');
    } else if (scrollLeft !== lastScrollLeft.current) {
      updateDirection('horizontal');
    }
    lastScrollLeft.current = scrollLeft;
    lastScrollTop.current = scrollTop;
  }, [boxRef]);

  return {
    scrollDirection,
    onScroll,
  };
};
