import { classNames } from '@vkontakte/vkjs';
import type { AlignType, HTMLAttributesWithRootRef } from '../../types';
import { RootComponent } from '../RootComponent/RootComponent';
import styles from './ButtonGroup.module.css';

const stylesMode = {
  vertical: styles.modeVertical,
  horizontal: styles.modeHorizontal,
};

const stylesGap = {
  space: styles.gapSpace,
  s: styles.gapS,
  m: styles.gapM,
  none: undefined,
};

const stylesAlign = {
  left: styles.alignLeft,
  center: styles.alignCenter,
  right: styles.alignRight,
};

type Gap = 'none' | 'space' | 's' | 'm';

type Mode = 'vertical' | 'horizontal';

export interface ButtonGroupProps<Segmented extends boolean = false>
  extends HTMLAttributesWithRootRef<HTMLDivElement> {
  segmented?: Segmented;
  /**
   * Задает расположение элементов внутри группы, вертикальное или горизонтальное.
   */
  mode?: Segmented extends false ? Mode : never;
  /**
   * Выставляет в зависимости от `mode` отступ по вертикали или горизонтали.
   */
  gap?: Segmented extends false ? Gap : never;
  /**
   * Растягивает компонент на всю ширину контейнера.
   *
   * Note: Для потомков соответствующее поведение нужно определять самостоятельно, где это необходимо.
   */
  stretched?: boolean;
  /**
   * Горизонтальное выравнивание элементов внутри группы.
   */
  align?: AlignType;
}

/**
 * @see https://vkcom.github.io/VKUI/#/ButtonGroup
 */
export const ButtonGroup = <Segmented extends boolean = false>({
  stretched = false,
  segmented,
  align = 'left' /* NOTE: Чтобы блоки по-умолчанию не растягивались на всю ширину контейнера */,
  ...restProps
}: ButtonGroupProps<Segmented>): React.ReactNode => {
  const gap: Gap | undefined = segmented ? 'space' : restProps.gap;
  const mode: Mode | undefined = segmented ? 'horizontal' : restProps.mode;

  return (
    <RootComponent
      baseClassName={classNames(
        styles.host,
        stylesMode[mode || 'horizontal'],
        stylesGap[gap || 'm'],
        segmented && styles.segmented,
        stretched && styles.stretched,
        stylesAlign[align],
      )}
      role="group"
      {...restProps}
    />
  );
};
