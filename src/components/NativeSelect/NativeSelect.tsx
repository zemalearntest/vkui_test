import * as React from "react";
import { classNames } from "../../lib/classNames";
import { DropdownIcon } from "../DropdownIcon/DropdownIcon";
import { FormField, FormFieldProps } from "../FormField/FormField";
import { HasAlign, HasRef, HasRootRef } from "../../types";
import { getClassName } from "../../helpers/getClassName";
import { useIsomorphicLayoutEffect } from "../../lib/useIsomorphicLayoutEffect";
import { useEnsuredControl } from "../../hooks/useEnsuredControl";
import { useExternRef } from "../../hooks/useExternRef";
import { usePlatform } from "../../hooks/usePlatform";
import { useAdaptivity } from "../../hooks/useAdaptivity";
import { getSizeXClassName } from "../../helpers/getSizeXClassName";
import { getSizeYClassName } from "../../helpers/getSizeYClassName";
import { SelectType, SelectTypography } from "../Select/Select";
import "../Select/Select.css";

export interface NativeSelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement>,
    HasRef<HTMLSelectElement>,
    HasRootRef<HTMLLabelElement>,
    HasAlign,
    Pick<FormFieldProps, "status"> {
  placeholder?: string;
  multiline?: boolean;
  selectType?: SelectType;
}

export interface SelectState {
  value?: React.SelectHTMLAttributes<HTMLSelectElement>["value"];
  title?: string;
  notSelected?: boolean;
}

/**
 * @see https://vkcom.github.io/VKUI/#/NativeSelect
 */
const NativeSelect: React.FC<NativeSelectProps> = ({
  style,
  defaultValue = "",
  align,
  placeholder,
  children,
  className,
  getRef,
  getRootRef,
  disabled,
  multiline,
  selectType = "default",
  status,
  ...restProps
}: NativeSelectProps) => {
  const platform = usePlatform();
  const [title, setTitle] = React.useState("");
  const [empty, setEmpty] = React.useState(false);
  const [value, onChange] = useEnsuredControl(restProps, { defaultValue });
  const selectRef = useExternRef(getRef);
  const { sizeX, sizeY } = useAdaptivity();

  useIsomorphicLayoutEffect(() => {
    const selectedOption =
      selectRef.current?.options[selectRef.current.selectedIndex];
    if (selectedOption) {
      setTitle(selectedOption.text);
      setEmpty(selectedOption.value === "" && placeholder != null);
    }
  }, [value, children]);

  return (
    <FormField
      Component="label"
      vkuiClass={classNames(
        getClassName("Select", platform),
        empty && "Select--empty",
        multiline && "Select--multiline",
        align && `Select--align-${align}`,
        getSizeXClassName("Select", sizeX),
        getSizeYClassName("Select", sizeY)
      )}
      className={className}
      style={style}
      getRootRef={getRootRef}
      disabled={disabled}
      after={<DropdownIcon />}
      status={status}
    >
      <select
        {...restProps}
        disabled={disabled}
        vkuiClass="Select__el"
        onChange={onChange}
        value={value}
        ref={selectRef}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {children}
      </select>
      <div vkuiClass="Select__container">
        <SelectTypography vkuiClass="Select__title" selectType={selectType}>
          {title}
        </SelectTypography>
      </div>
    </FormField>
  );
};

export { NativeSelect };
