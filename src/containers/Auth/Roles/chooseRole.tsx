import { SpaceVertical } from "@/styles/styled";
import React from "react";
import FormRoleLogin from "../components/RoleForm";
import { Description, SignUpRole, TextLogin, WrapperAbsolute } from "../styled";
import { IRoleState } from "../types";

export interface IChooseRoleProps {
  roles: IRoleState;
}

export default function ChooseRole(props: IChooseRoleProps) {
  return (
    <WrapperAbsolute>
      <TextLogin>Hello Nick</TextLogin>
      <SpaceVertical height={56} />
      <Description>Choose role</Description>
      <SpaceVertical height={24} />
      <FormRoleLogin roles={props.roles} />
      <SignUpRole className="main_color pointer">
        Sign up for other roles
      </SignUpRole>
    </WrapperAbsolute>
  );
}
