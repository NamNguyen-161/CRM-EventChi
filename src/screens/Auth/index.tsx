import AuthContainer from "@/containers/Auth";
import AuthLayout from "@/layouts/Auth";
import React, { memo } from "react";

export interface IAuthScreenProps {}

const AuthScreen = (props: IAuthScreenProps) => {
  return (
    <AuthLayout>
      <AuthContainer />
    </AuthLayout>
  );
};

const Auth = memo(AuthScreen);
export default Auth;
