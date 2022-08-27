import React from "react";

import classNames from "classnames";

export enum LoaderSize {
  s = "s",
  m = "m",
  l = "l",
}

export type LoaderProps = {
  loading?: boolean;
  size?: LoaderSize;
  className?: string;
};

const Loader: React.FC<LoaderProps> = ({
  loading = true,
  size = "m",
  className = "",
}) => {
  const a = classNames(`${className}`, `loader_size-${size}`);

  if (loading === true) {
    return <div className={a}>дывлаы</div>;
  } else {
    return null;
  }
};

export default Loader;
