import React from "react";
import PhoneLogin from "./PhoneLogin";
import { Wrapper } from "./styled";

export interface IAuthContainerProps {}

export default function AuthContainer(props: IAuthContainerProps) {
  return (
    <Wrapper>
      <PhoneLogin />
    </Wrapper>
  );
}
