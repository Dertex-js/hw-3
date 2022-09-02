import React from "react";

import Loader from "@components/Loader";

export type WithLoaderProps = React.PropsWithChildren<{
  loading: boolean;
}>;

const WithLoader: React.FC<WithLoaderProps> = ({ loading, children }) => {
  return (
    <div>
      {children}
      {loading && <Loader loading={loading} />}
    </div>
  );
};

export default React.memo(WithLoader);
