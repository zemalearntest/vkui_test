import { useRef } from 'react';
import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { useExternRef } from '../../hooks/useExternRef';
import { useFocusVisibleClassName } from '../../hooks/useFocusVisibleClassName';
import { useFocusWithin } from '../../hooks/useFocusWithin';
import { useIsomorphicLayoutEffect } from '../../lib/useIsomorphicLayoutEffect';
import { HasComponent, HasRootRef } from '../../types';
import {useCompensateScrollWidth} from "./useCompensateScrollWidth";
import styles from './FormField.module.css';

const sizeYClassNames = {
  none: styles['FormField--sizeY-none'],
  ['compact']: styles['FormField--sizeY-compact'],
};

const stylesStatus = {
  error: styles['FormField--status-error'],
  valid: styles['FormField--status-valid'],
};

export interface FormFieldProps {
  status?: 'default' | 'error' | 'valid';
  /**
   * Добавляет иконку слева.
   *
   * Рекомендации:
   *
   * - Используйте следующие размеры иконок `12` | `16` | `20` | `24` | `28`.
   * - Используйте [IconButton](https://vkcom.github.io/VKUI/#/IconButton), если вам нужна кликабельная иконка.
   */
  before?: React.ReactNode;
  /**
   * Добавляет иконку справа.
   *
   * Рекомендации:
   *
   * - Используйте следующие размеры иконок `12` | `16` | `20` | `24` | `28`.
   * - Используйте [IconButton](https://vkcom.github.io/VKUI/#/IconButton), если вам нужна кликабельная иконка.
   */
  after?: React.ReactNode;
  /**
   * Режим отображения.
   *
   * - `default` — показывает фон, обводку и, при наличии, текст-подсказку.
   * - `plain` — показывает только текст-подсказку.
   */
  mode?: 'default' | 'plain';
}

interface FormFieldOwnProps
  extends React.AllHTMLAttributes<HTMLElement>,
    HasRootRef<HTMLElement>,
    HasComponent,
    FormFieldProps {
  disabled?: boolean;
}

/**
 * @see https://vkcom.github.io/VKUI/#/FormField
 */
export const FormField = ({
  Component = 'span',
  status = 'default',
  children,
  getRootRef,
  before,
  after,
  disabled,
  mode = 'default',
  className,
  ...restProps
}: FormFieldOwnProps): React.ReactNode => {
  const elRef = useExternRef(getRootRef);
  const { sizeY = 'none' } = useAdaptivity();
  const afterRef = useRef<HTMLSpanElement | null>(null);
  const beforeRef = useRef<HTMLSpanElement | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [hover, setHover] = React.useState(false);

  const focusWithin = useFocusWithin(elRef);
  const focusVisibleClassNames = useFocusVisibleClassName({
    focusVisible: focusWithin,
    mode: styles['FormField--focus-visible'],
  });

  const handleMouseEnter = (e: MouseEvent) => {
    e.stopPropagation();
    setHover(true);
  };

  const handleMouseLeave = (e: MouseEvent) => {
    e.stopPropagation();
    setHover(false);
  };

  const updatePadding = (partRef: React.RefObject<HTMLSpanElement | null>, property: string) => {
    if (partRef.current) {
      scrollContainerRef.current?.style.setProperty(
        property,
        `${partRef.current.offsetWidth}px`,
      );
    }
  }

  useIsomorphicLayoutEffect(() => {
    before && updatePadding(beforeRef, 'padding-inline-start');
    after && updatePadding(afterRef, 'padding-inline-end');
  }, [after, before, afterRef, beforeRef, scrollContainerRef]);

  useCompensateScrollWidth(scrollContainerRef, afterRef, !!after);

  return (
    <Component
      {...restProps}
      ref={elRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={classNames(
        styles['FormField'],
        mode === 'default' && styles['FormField--mode-default'],
        status !== 'default' && stylesStatus[status],
        sizeY !== 'regular' && sizeYClassNames[sizeY],
        disabled && styles['FormField--disabled'],
        !disabled && hover && styles['FormField--hover'],
        focusVisibleClassNames,
        className,
      )}
    >
      {before && (
        <span className={styles['FormField__before']} ref={beforeRef}>
            {before}
          </span>
      )}
      <div className={styles['FormField__scroll-container']} ref={scrollContainerRef}>
        <div className={styles['FormField__content']}>{children}</div>
      </div>
      {after && (
        <span
          ref={afterRef}
          className={classNames(styles['FormField__after'], 'vkuiInternalFormField__after')}
        >
            {after}
          </span>
      )}
      <span aria-hidden className={styles['FormField__border']} />
    </Component>
  );
};
