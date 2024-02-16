import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { HasComponent, HasRootRef } from '../../types';
import { RootComponent } from '../RootComponent/RootComponent';
import styles from './Typography.module.css';

const stylesWeight = {
  '1': styles['Typography--weight-1'],
  '2': styles['Typography--weight-2'],
  '3': styles['Typography--weight-3'],
};

export interface HasCaps {
  caps?: boolean;
}

export interface TypographyProps
  extends React.AllHTMLAttributes<HTMLElement>,
    HasComponent,
    HasRootRef<HTMLElement> {
  /**
   * Задаёт начертание шрифта, отличное от стандартного.
   */
  weight?: '1' | '2' | '3';
  /**
   * Убирает внешние отступы
   */
  normalize?: boolean;
  /**
   * Отображает текст в одну строку для ellipsis
   */
  onelineText?: boolean;
}

export const Typography = ({
  weight,
  Component = 'span',
  normalize,
  onelineText,
  ...restProps
}: TypographyProps) => (
  <RootComponent
    Component={Component}
    baseClassName={classNames(
      styles['Typography'],
      onelineText && styles['Typography--oneline-text'],
      normalize && styles['Typography--normalize'],
      weight && stylesWeight[weight],
    )}
    {...restProps}
  />
);
