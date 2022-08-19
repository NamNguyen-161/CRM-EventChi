import React, { memo } from "react";

export interface IAuthScreenProps {}

const AuthScreen = (props: IAuthScreenProps) => {
  return <div>AuthScreen</div>;
};

const Auth = memo(AuthScreen);
export default Auth;
