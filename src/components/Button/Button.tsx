import React, { useState } from "react";

import WithLoader from "@components/WithLoader";
import classNames from "classnames";

export enum ButtonColor {
  primary = "primary",
  secondary = "secondary",
}

export type ButtonProps = React.PropsWithChildren<{
  loading?: boolean;
  color?: ButtonColor;
}> &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({
  loading = false,
  color = ButtonColor.primary,
  children,
  ...props
}) => {
  const [isDisabled, setIsDisabled] = useState(props.disabled);

  const className: string = classNames(
    `button`,
    `button_color-${color}`,
    props.className,
    { button_disabled: loading || isDisabled }
  );

  if (loading) {
    setIsDisabled(true);
  }

  return (
    <button {...props} className={className}>
      {children}
      {loading && <WithLoader loading={loading} />}
    </button>
  );
};

export default React.memo(Button);
