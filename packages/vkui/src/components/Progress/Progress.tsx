import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { clamp } from '../../helpers/math';
import type { HTMLAttributesWithRootRef } from '../../types';
import { RootComponent } from '../RootComponent/RootComponent';
import styles from './Progress.module.css';

const stylesAppearance = {
  accent: styles.appearanceAccent,
  positive: styles.appearancePositive,
  negative: styles.appearanceNegative,
};

function progressCustomHeightStyle(height: number | undefined): React.CSSProperties | undefined {
  return height
    ? {
        height,
        borderRadius: height / 2,
      }
    : undefined;
}

function progressStyle(height: number | undefined, styleProps: React.CSSProperties | undefined) {
  const styleHeight = progressCustomHeightStyle(height);
  const style = styleHeight ? { ...styleProps, ...styleHeight } : styleProps;

  return style;
}

export interface ProgressProps extends HTMLAttributesWithRootRef<HTMLDivElement> {
  /**
   * Стиль отображения прогрессбара
   */
  appearance?: 'accent' | 'positive' | 'negative';
  value?: number;
  /**
   * Высота элемента.
   */
  height?: number;
}

const PROGRESS_MIN_VALUE = 0;
const PROGRESS_MAX_VALUE = 100;

/**
 * @see https://vkcom.github.io/VKUI/#/Progress
 */
export const Progress = ({
  value = 0,
  appearance = 'accent',
  height,
  style: styleProps,
  ...restProps
}: ProgressProps): React.ReactNode => {
  const progress = clamp(value, PROGRESS_MIN_VALUE, PROGRESS_MAX_VALUE);
  const title = `${progress} / ${PROGRESS_MAX_VALUE}`;

  const style = progressStyle(height, styleProps);

  return (
    <RootComponent
      aria-valuenow={value}
      title={title}
      style={style}
      {...restProps}
      role="progressbar"
      aria-valuemin={PROGRESS_MIN_VALUE}
      aria-valuemax={PROGRESS_MAX_VALUE}
      baseClassName={classNames(styles.host, stylesAppearance[appearance])}
    >
      <div className={styles.in} style={{ width: `${progress}%` }} />
    </RootComponent>
  );
};
