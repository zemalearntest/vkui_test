import * as React from 'react';
import { isEqual } from '@vkontakte/vkjs';
import { SimulateReactInputTargetState } from '../../lib/react';
import { defaultFilterFn, type FilterFn } from '../../lib/select';
import { useIsomorphicLayoutEffect } from '../../lib/useIsomorphicLayoutEffect';
import {
  transformValue,
  useChipsInput,
  type UseChipsInputProps,
} from '../ChipsInput/useChipsInput';
import {
  DEFAULT_INPUT_VALUE,
  DEFAULT_VALUE,
  getNewOptionDataDefault,
  getOptionLabelDefault,
  getOptionValueDefault,
} from '../ChipsInputBase/constants';
import type { ChipOption, ChipOptionLabel, ChipOptionValue } from '../ChipsInputBase/types';
import { DEFAULT_EMPTY_TEXT, DEFAULT_SELECTED_BEHAVIOR, isNotServicePreset } from './constants';
import type { OptionPreset } from './types';

export interface UseChipsSelectProps<O extends ChipOption = ChipOption>
  extends UseChipsInputProps<O> {
  options?: O[];
  /**
   * Возможность создавать чипы которых нет в списке:
   * - `true` – добавление по кнопке Enter;
   * - `<текст>` – помимо возможности добавления через Enter, в пункте меню появится кнопка с текстом.
   * Текст для пункта, создающего чипы при клике, также отвечает за то, будет ли показан этот пункт
   * (показывается после того как в списке не останется опций).
   */
  creatable?: boolean | string;
  /**
   * Текст, который показывается если список опций пуст
   */
  emptyText?: string;
  /**
   * Показывать или скрывать уже выбранные опции.
   */
  selectedBehavior?: 'hide' | 'highlight';
  filterFn?: false | FilterFn<O>;
  /**
   * Будет вызвано в момент скрытия выпадающего списка
   */
  onClose?: VoidFunction;
  /**
   * Будет вызвано в момент открытия выпадающего списка
   */
  onOpen?: VoidFunction;
}

export const useChipsSelect = <O extends ChipOption>({
  // common
  disabled,

  // option
  value: valueProp,
  defaultValue,
  onChange,
  getOptionLabel = getOptionLabelDefault,
  getOptionValue = getOptionValueDefault,
  getNewOptionData = getNewOptionDataDefault,

  // input
  inputValue: inputValueProp,
  defaultInputValue = DEFAULT_INPUT_VALUE,
  onInputChange: onInputChangeProp,

  // dropdown
  creatable = false,
  emptyText = DEFAULT_EMPTY_TEXT,
  filterFn = defaultFilterFn,
  selectedBehavior = DEFAULT_SELECTED_BEHAVIOR,
  options: optionsProp = DEFAULT_VALUE,
  onClose,
  onOpen,
}: UseChipsSelectProps<O>): {
  // options
  value: Array<
    O & {
      label: ChipOptionLabel;
      value: ChipOptionValue;
    }
  >;
  // input
  inputValue: string;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  // dropdown states
  options: Array<OptionPreset<O>>;
  opened: boolean;
  setOpened: (isOpened: boolean) => void;
  focusedOption: O | null;
  focusedOptionIndex: number | null;
  setFocusedOption: React.Dispatch<React.SetStateAction<O | null>>;
  setFocusedOptionIndex: React.Dispatch<React.SetStateAction<number | null>>;
  addOption: (newValue: string | O) => void;
  addOptionFromInput: (inputValue: string) => void;
  removeOption: (newValue: ChipOptionValue | O) => void;
  clearOptions: () => void;
  inputRef: React.RefObject<HTMLInputElement & SimulateReactInputTargetState>;
  clearInput: () => void;
} => {
  const { value, inputValue, onInputChange, ...restChipsInputProps } = useChipsInput({
    // option
    value: valueProp,
    defaultValue,
    onChange,
    getOptionValue,
    getOptionLabel,
    getNewOptionData,

    // input
    inputValue: inputValueProp,
    defaultInputValue,
    onInputChange: onInputChangeProp,

    // other
    disabled,
  });

  // dropdown
  const [opened, setOpened] = React.useState(false);
  const [options, setOptions] = React.useState<Array<OptionPreset<O>>>(() =>
    opened
      ? transformOptions({
          value,
          getOptionValue,
          getOptionLabel,
          inputValue,
          emptyText,
          creatable,
          filterFn,
          options: optionsProp,
          selectedBehavior,
        })
      : [],
  );
  const [focusedOptionIndex, setFocusedOptionIndex] = React.useState<number | null>(0);
  const [focusedOption, setFocusedOption] = React.useState<O | null>(null);

  const handleOpened = React.useCallback(
    (isOpened: boolean) => {
      isOpened ? onOpen?.() : onClose?.();
      setOpened(isOpened);
    },
    [onOpen, onClose],
  );

  const handleInputChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      onInputChange(event);

      if (!opened) {
        handleOpened(true);
        setFocusedOptionIndex(0);
      }
    },
    [onInputChange, opened, handleOpened],
  );

  useIsomorphicLayoutEffect(
    function handleDropdownOpen() {
      if (!opened) {
        return;
      }

      setOptions((prevOptions) => {
        const nextOptions = transformOptions({
          value,
          getOptionValue,
          getOptionLabel,
          inputValue,
          emptyText,
          creatable,
          filterFn,
          options: optionsProp,
          selectedBehavior,
        });

        if (isEqual(prevOptions, nextOptions)) {
          return prevOptions;
        }

        return nextOptions;
      });
    },
    [
      opened,
      value,
      getOptionLabel,
      getOptionValue,
      inputValue,
      optionsProp,
      creatable,
      selectedBehavior,
      filterFn,
    ],
  );

  return {
    ...restChipsInputProps,

    // options
    value,

    // input
    inputValue,
    onInputChange: handleInputChange,

    // dropdown states
    options,
    opened,
    setOpened: handleOpened,
    focusedOption,
    focusedOptionIndex,
    setFocusedOption,
    setFocusedOptionIndex,
  };
};

function transformOptions<O extends ChipOption>({
  value,
  getOptionValue = getOptionValueDefault,
  getOptionLabel = getOptionLabelDefault,
  inputValue = DEFAULT_INPUT_VALUE,
  emptyText = DEFAULT_EMPTY_TEXT,
  creatable = false,
  filterFn = defaultFilterFn,
  options: optionsProp = DEFAULT_VALUE,
  selectedBehavior = DEFAULT_SELECTED_BEHAVIOR,
}: Required<Pick<UseChipsSelectProps<O>, 'value'>> &
  Pick<
    UseChipsSelectProps<O>,
    | 'getOptionValue'
    | 'getOptionLabel'
    | 'inputValue'
    | 'emptyText'
    | 'creatable'
    | 'filterFn'
    | 'options'
    | 'selectedBehavior'
  >) {
  const filteredOptionsProp = filterFn
    ? optionsProp.filter((option) => filterFn(inputValue, option, getOptionLabel))
    : optionsProp;

  if (filteredOptionsProp.length === 0) {
    if (inputValue !== DEFAULT_INPUT_VALUE && typeof creatable === 'string') {
      return [{ actionText: creatable }];
    }
    return [{ placeholder: emptyText }];
  }

  const parsedOptions = transformValue(filteredOptionsProp, getOptionValue, getOptionLabel);

  if (selectedBehavior === 'hide') {
    const selected = value.map((item) => item.value);
    return parsedOptions.filter((item) =>
      isNotServicePreset(item) ? !selected.includes(item.value) : false,
    );
  }
  return parsedOptions;
}
