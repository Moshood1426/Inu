import React from "react";
import classes from "./FormInput.module.scss";

interface FormInputProps {
  name: string;
  type: string;
  value: string;
  min?: number;
  max?: number;
  placeholder?: string;
  label?: boolean;
  labelText?: string;
  labelClass?: string;
  inputClass?: string;
  divClass?: string;
  disabled?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  labelText,
  labelClass,
  min,
  max,
  inputClass,
  divClass,
  name,
  placeholder,
  type,
  value,
  disabled,
  onChange,
  onFocus,
  onBlur,
  onKeyDown,
}) => {
  return (
    <div className={divClass ? divClass : classes.form_input}>
      {label && (
        <label
          htmlFor={name}
          className={labelClass ? labelClass : "form_label"}
        >
          {labelText ? labelText : name}
        </label>
      )}
      <input
        type={type}
        min={min && min}
        max={max && max}
        value={value}
        name={name}
        onChange={onChange}
        className={inputClass ? inputClass : "form_input"}
        placeholder={placeholder ? placeholder : ""}
        disabled={disabled ? true : false}
        onFocus={onFocus}
        onBlur={onBlur}
        id={name}
        onKeyDown={onKeyDown}
      />
    </div>
  );
};

export default FormInput;