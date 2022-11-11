import React from "react";
import { ConfigProviderPartial } from "../ConfigProvider/ConfigProviderPartial";
import { ConfigProviderContextInterface } from "../ConfigProvider/ConfigProviderContext";

export interface LocaleProviderProps {
  /**
   * Строка с языковой меткой BCP 47
   */
  value: ConfigProviderContextInterface["locale"];
  children: React.ReactNode;
}

/**
 * Компонент, прокидывающий локаль
 *
 * @version 5.0.0
 * @see https://vkcom.github.io/VKUI/#/LocaleProvider
 */
export function LocaleProvider({ value, children }: LocaleProviderProps) {
  return (
    <ConfigProviderPartial locale={value}>{children}</ConfigProviderPartial>
  );
}
