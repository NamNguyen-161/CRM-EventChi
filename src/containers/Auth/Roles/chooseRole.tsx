import { SpaceVertical } from "@/styles/styled";
import React from "react";
import FormRoleLogin from "../components/RoleForm";
import { Description, TextLogin, WrapperAbsolute } from "../styled";

export interface IChooseRoleProps {}

export default function ChooseRole(props: IChooseRoleProps) {
  return (
    <WrapperAbsolute>
      <TextLogin>Hello Nick</TextLogin>
      <SpaceVertical height={56} />
      <Description>Choose role</Description>
      <SpaceVertical height={24} />
      <FormRoleLogin />
    </WrapperAbsolute>
  );
}
