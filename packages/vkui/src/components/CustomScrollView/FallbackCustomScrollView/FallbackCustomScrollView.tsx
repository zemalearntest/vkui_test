'use client';

import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../../hooks/useAdaptivity';
import { useExternRef } from '../../../hooks/useExternRef';
import { type FallbackCustomScrollViewProps as CustomScrollViewProps } from '../CustomScrollView';
import { overscrollBehaviorClassNames } from '../common/overscrollBehaviour';
import { ScrollX } from './ScrollX';
import { ScrollY } from './ScrollY';
import { type BarHandlers } from './types';
import { useCustomScrollViewResize } from './useCustomScrollViewResize';
import { useDetectScrollDirection } from './useDetectScrollDirection';
import styles from './FallbackCustomScrollView.module.css';

function hasPointerClassName(hasPointer: boolean | undefined) {
  switch (hasPointer) {
    case true:
      return styles.hasPointerTrue;
    case false:
      return styles.hasPointerFalse;
    case undefined:
    default:
      return styles.hasPointerNone;
  }
}

type OverlayCustomScrollViewProps = Omit<CustomScrollViewProps, 'useFallback'>;

export const FallbackCustomScrollView = ({
  className,
  children,
  boxRef: externalBoxRef,
  windowResize,
  autoHideScrollbar = false,
  autoHideScrollbarDelay,
  enableHorizontalScroll = false,
  onScroll: onScrollProp,
  getRootRef,
  overscrollBehavior = 'auto',
  ...restProps
}: OverlayCustomScrollViewProps) => {
  const { hasPointer } = useAdaptivity();

  const boxRef = useExternRef(externalBoxRef);
  const boxContentRef = React.useRef<HTMLDivElement>(null);

  const detectScrollDirection = useDetectScrollDirection();

  const barYHandlers = React.useRef<BarHandlers | null>(null);
  const barXHandlers = React.useRef<BarHandlers | null>(null);

  useCustomScrollViewResize({
    windowResize,
    boxContentRef,
    onResize: () => {
      barYHandlers.current?.resize();
      barXHandlers.current?.resize();
    },
  });

  const onScroll = (event: React.UIEvent<HTMLDivElement>) => {
    const scrollDirection = detectScrollDirection(event);
    switch (scrollDirection) {
      case 'horizontal':
        barXHandlers.current?.scroll();
        break;
      case 'vertical':
        barYHandlers.current?.scroll();
        break;
    }
    onScrollProp?.(event);
  };

  return (
    <div
      className={classNames(className, styles.host, hasPointerClassName(hasPointer))}
      ref={getRootRef}
      {...restProps}
    >
      <div
        className={classNames(
          styles.box,
          enableHorizontalScroll && styles.boxHorizontalEnabled,
          overscrollBehaviorClassNames[overscrollBehavior],
        )}
        tabIndex={-1}
        ref={boxRef}
        onScroll={onScroll}
      >
        <div ref={boxContentRef} className={styles.boxContent}>
          {children}
        </div>
      </div>
      <ScrollY
        barHandlers={barYHandlers}
        boxRef={boxRef}
        autoHideScrollbar={autoHideScrollbar}
        autoHideScrollbarDelay={autoHideScrollbarDelay}
      />
      {enableHorizontalScroll && (
        <ScrollX
          barHandlers={barXHandlers}
          boxRef={boxRef}
          autoHideScrollbar={autoHideScrollbar}
          autoHideScrollbarDelay={autoHideScrollbarDelay}
        />
      )}
    </div>
  );
};
