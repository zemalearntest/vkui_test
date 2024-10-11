'use client';

import * as React from 'react';
import type { HasRootRef } from '../../types';
import { FallbackCustomScrollView } from './FallbackCustomScrollView/FallbackCustomScrollView';
import { type TrackerOptionsProps } from './FallbackCustomScrollView/useTrackerVisibility';
import { NativeCustomScrollView } from './NativeCustomScrollView/NativeCustomScrollView';

export type CommonScrollViewProps = React.AllHTMLAttributes<HTMLDivElement> &
  HasRootRef<HTMLDivElement> & {
    boxRef?: React.Ref<HTMLDivElement>;
    className?: HTMLDivElement['className'];
    onScroll?: (event: React.UIEvent<HTMLDivElement>) => void;
    children: React.ReactNode;
    /**
     * Поведение overscroll, подробнее можно почитать в [документации](https://developer.mozilla.org/en-US/docs/Web/CSS/overscroll-behavior)
     */
    overscrollBehavior?: 'auto' | 'contain' | 'none';
    /**
     * Включение замены горизонтального скролла
     */
    enableHorizontalScroll?: boolean;
  };

export type FallbackCustomScrollViewProps = CommonScrollViewProps &
  TrackerOptionsProps & {
    useFallback: true;
    windowResize?: boolean;
  };

export type NativeCustomScrollViewProps = CommonScrollViewProps & {
  useFallback?: false | undefined;
};

export type CustomScrollViewProps = FallbackCustomScrollViewProps | NativeCustomScrollViewProps;

/**
 * @see https://vkcom.github.io/VKUI/#/CustomScrollView
 */
export const CustomScrollView = (props: CustomScrollViewProps): React.ReactNode => {
  const { useFallback, ...restProps } = props;
  if (useFallback) {
    return <FallbackCustomScrollView {...restProps} />;
  }
  return <NativeCustomScrollView {...restProps} />;
};
