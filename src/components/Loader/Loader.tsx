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
  size = LoaderSize.m,
  className,
}) => {
  if (loading) {
    return (
      <div className={classNames(`${className}`, `loader_size-${size}`)}></div>
    );
  } else {
    return null;
  }
};

export default React.memo(Loader);
