import { SpaceVertical } from "@/styles/styled";
import React from "react";
import FormRoleLogin from "../components/RoleForm";
import { Description, SignUpRole, TextLogin, WrapperAbsolute } from "../styled";

export interface IChooseRoleProps {}

export default function ChooseRole(props: IChooseRoleProps) {
  console.log("render ChooseRole");

  return (
    <WrapperAbsolute>
      <TextLogin>Hello Nick</TextLogin>
      <SpaceVertical height={56} />
      <Description>Choose role</Description>
      <SpaceVertical height={24} />
      <FormRoleLogin />
      <SignUpRole className="main_color pointer">
        Sign up for other roles
      </SignUpRole>
    </WrapperAbsolute>
  );
}
