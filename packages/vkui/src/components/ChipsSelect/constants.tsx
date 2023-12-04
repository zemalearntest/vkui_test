import * as React from 'react';
import type { ChipOption } from '../ChipsInputBase/types';
import {
  CustomSelectOption,
  type CustomSelectOptionProps,
} from '../CustomSelectOption/CustomSelectOption';
import type { CreateNewOptionPreset, FocusActionType, PlaceholderPreset, Preset } from './types';

export const DEFAULT_SELECTED_BEHAVIOR = 'highlight';

export const DEFAULT_EMPTY_TEXT = 'Ничего не найдено';

export const FOCUS_ACTION_NEXT: FocusActionType = 'next';

export const FOCUS_ACTION_PREV: FocusActionType = 'prev';

export const getExpandedAriaLabelDefault = (opened: boolean) => (opened ? 'Скрыть' : 'Развернуть');

export const renderOptionDefault = (props: CustomSelectOptionProps) => (
  <CustomSelectOption {...props} />
);

export const isCreateNewOptionPreset = <O extends ChipOption>(
  option: Preset<O>,
): option is CreateNewOptionPreset => option && 'actionText' in option;

export const isEmptyOptionPreset = <O extends ChipOption>(
  option: Preset<O>,
): option is PlaceholderPreset => option && 'placeholder' in option;

export const isNotServicePreset = <O extends ChipOption>(option: Preset<O>): option is O =>
  !isCreateNewOptionPreset(option) && !isEmptyOptionPreset(option);
