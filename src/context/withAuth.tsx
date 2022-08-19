import React from "react";
import { AuthConsumer, Authentication } from "./Auth";

const withAuth = (WrappedComponent: any) => {
  return (props: any) => {
    <AuthConsumer>
      {(auth: Authentication) => {
        return <WrappedComponent auth={auth} {...props} />;
      }}
    </AuthConsumer>;
  };
};

export default withAuth;
