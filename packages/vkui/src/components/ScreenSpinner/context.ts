import * as React from 'react';
import { type ScreenSpinnerProps } from './types';

export interface ScreenSpinnerContextProps {
  state: NonNullable<ScreenSpinnerProps['state']>;
  subtitle?: ScreenSpinnerProps['subtitle'];
}

export const ScreenSpinnerContext: React.Context<ScreenSpinnerContextProps> =
  React.createContext<ScreenSpinnerContextProps>({
    state: 'loading',
    subtitle: undefined,
  });
