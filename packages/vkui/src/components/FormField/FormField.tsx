import { useRef } from 'react';
import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { useExternRef } from '../../hooks/useExternRef';
import { useFocusVisibleClassName } from '../../hooks/useFocusVisibleClassName';
import { useFocusWithin } from '../../hooks/useFocusWithin';
import { useIsomorphicLayoutEffect } from '../../lib/useIsomorphicLayoutEffect';
import { CSSCustomProperties, HasComponent, HasRootRef } from '../../types';
import { useScrollbarWidth } from './useScrollbarWidth';
import styles from './FormField.module.css';

const sizeYClassNames = {
  none: styles['FormField--sizeY-none'],
  ['compact']: styles['FormField--sizeY-compact'],
};

const stylesStatus = {
  error: styles['FormField--status-error'],
  valid: styles['FormField--status-valid'],
};

const iconAlignClassNames = {
  center: undefined,
  start: styles['FormField__icon--align-start'],
  end: styles['FormField__icon--align-end'],
};

export type FieldIconsAlign = 'start' | 'center' | 'end';

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
   * Вертикальное выравнивание иконки слева
   */
  beforeAlign?: FieldIconsAlign;
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
   * Вертикальное выравнивание иконки справа
   */
  afterAlign?: FieldIconsAlign;
  /**
   * Режим отображения.
   *
   * - `default` — показывает фон, обводку и, при наличии, текст-подсказку.
   * - `plain` — показывает только текст-подсказку.
   */
  mode?: 'default' | 'plain';
  /**
   * Максимальная высота поля
   */
  maxHeight?: number;
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
  beforeAlign = 'center',
  afterAlign = 'center',
  disabled,
  mode = 'default',
  className,
  maxHeight,
  style,
  ...restProps
}: FormFieldOwnProps): React.ReactNode => {
  const elRef = useExternRef(getRootRef);
  const { sizeY = 'none' } = useAdaptivity();
  const afterRef = useRef<HTMLSpanElement | null>(null);
  const beforeRef = useRef<HTMLSpanElement | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [hover, setHover] = React.useState(false);
  const [paddingInlineStart, setPaddingInlineStart] = React.useState(0);
  const [paddingInlineEnd, setPaddingInlineEnd] = React.useState(0);

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

  const updatePadding = (
    partRef: React.RefObject<HTMLSpanElement | null>,
    setter: (value: number) => void,
  ) => {
    if (partRef.current) {
      setter(partRef.current.offsetWidth);
    }
  };

  useIsomorphicLayoutEffect(() => {
    before && updatePadding(beforeRef, setPaddingInlineStart);
    after && updatePadding(afterRef, setPaddingInlineEnd);
  }, [after, before, afterRef, beforeRef, scrollContainerRef]);

  const scrollbarWidth = useScrollbarWidth(scrollContainerRef);

  const scrollContainerStyles: CSSCustomProperties = React.useMemo(
    () => ({
      '--vkui_internal--FormField_padding_inline-start': `${paddingInlineStart}px`,
      '--vkui_internal--FormField_padding_inline-end': `${paddingInlineEnd}px`,
    }),
    [paddingInlineStart, paddingInlineEnd],
  );

  const afterStyles: CSSCustomProperties = React.useMemo(
    () => ({
      '--vkui_internal--FormField_inset_inline-end': `${scrollbarWidth}px`,
    }),
    [scrollbarWidth],
  );

  return (
    <Component
      {...restProps}
      ref={elRef}
      style={{
        ...style,
        maxHeight,
      }}
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
      <div
        className={styles['FormField__scroll-container']}
        ref={scrollContainerRef}
        style={scrollContainerStyles}
      >
        <div className={styles['FormField__content']}>{children}</div>
      </div>
      {before && (
        <span
          className={classNames(styles['FormField__before'], iconAlignClassNames[beforeAlign])}
          ref={beforeRef}
        >
          {before}
        </span>
      )}
      {after && (
        <span
          ref={afterRef}
          className={classNames(
            styles['FormField__after'],
            iconAlignClassNames[afterAlign],
            'vkuiInternalFormField__after',
          )}
          style={afterStyles}
        >
          {after}
        </span>
      )}
      <span aria-hidden className={styles['FormField__border']} />
    </Component>
  );
};
