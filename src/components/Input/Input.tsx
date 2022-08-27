import React from "react";

import classNames from "classnames";

export type InputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "onChange"
> & {
  value: string;
  /** Callback, вызываемый при вводе данных в поле */
  onChange: (value: string) => void;
};

const Input: React.FC<InputProps> = ({ value, onChange, ...props }) => {
  const className: string = classNames(
    "input",
    { input_disabled: props.disabled },
    props.className
  );
  return (
    <input
      {...props}
      type="text"
      className={className}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default Input;
