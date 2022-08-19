import React from "react";
import { BackendConsumer, BackendProps } from "./Backend";

const withBackendAccess = (WrappedComponent: any) => {
  return (props: any) => (
    <BackendConsumer>
      {(backend: BackendProps) => {
        return <WrappedComponent backend={backend} {...props} />;
      }}
    </BackendConsumer>
  );
};

export default withBackendAccess;
