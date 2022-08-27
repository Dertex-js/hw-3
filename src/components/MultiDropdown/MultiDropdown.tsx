import React, { useState } from "react";

export type Option = {
  key: string;
  value: string;
};

export type MultiDropdownProps = {
  options: Option[];
  value: Option[];
  onChange: (value: Option[]) => void;
  disabled?: boolean;
  pluralizeOptions: (value: Option[]) => string;
};

const MultiDropdown: React.FC<MultiDropdownProps> = ({
  options,
  value,
  onChange,
  disabled,
  pluralizeOptions,
}) => {
  const onClickFn = (item: Option) => () => {
    if (value.find((a) => a.key === item.key)) {
      onChange(value.filter((a) => a.key !== item.key));
    } else {
      onChange(value.concat([item]));
    }
  };

  const values = options.map((item) => (
    <div key={item.key} onClick={onClickFn(item)}>
      {item.value}
    </div>
  ));

  const [isShow, setIsShow] = useState(true);

  return (
    <div>
      <div
        onClick={() => {
          if (!disabled) setIsShow((prevState) => !prevState);
        }}
      >
        {pluralizeOptions(value)}
      </div>
      <div>{disabled || isShow || values}</div>
    </div>
  );
};

export default MultiDropdown;
