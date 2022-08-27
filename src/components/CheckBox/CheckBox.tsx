import React from "react";

type CheckBoxProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "onChange"
> & {
  /** Вызывается при клике на чекбокс */
  onChange: (value: boolean) => void;
};

const CheckBox: React.FC<CheckBoxProps> = ({ onChange, ...props }) => {
  return (
    <input
      type="checkbox"
      {...props}
      onChange={(e) => onChange(e.target.checked)}
    />
  );
};

export default CheckBox;
