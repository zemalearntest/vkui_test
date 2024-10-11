'use client';

import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useExternRef } from '../../../hooks/useExternRef';
import { type NativeCustomScrollViewProps as CustomScrollViewProps } from '../CustomScrollView';
import { overscrollBehaviorClassNames } from '../common/overscrollBehaviour';
import styles from './NativeCustomScrollView.module.css';

type NativeCustomScrollViewProps = Omit<CustomScrollViewProps, 'useFallback'>;

export const NativeCustomScrollView = ({
  className,
  children,
  enableHorizontalScroll = false,
  onScroll,
  getRootRef,
  overscrollBehavior = 'auto',
  boxRef,
  ...restProps
}: NativeCustomScrollViewProps): React.ReactNode => {
  const ref = useExternRef(getRootRef, boxRef);
  return (
    <div
      className={classNames(
        className,
        styles.host,
        enableHorizontalScroll && styles.horizontalScrollEnabled,
        overscrollBehaviorClassNames[overscrollBehavior],
      )}
      ref={ref}
      onScroll={onScroll}
      {...restProps}
    >
      {children}
    </div>
  );
};
