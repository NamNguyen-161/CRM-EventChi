import { SpaceVertical } from "@/styles/styled";
import { Box, Stack } from "@mui/material";
import React, { memo } from "react";
import FormLoginPhone from "../components/FormLoginPhone";
import { EStepLogin } from "../components/type";
import { Description, TextLogin, WrapperAbsolute } from "../styled";
import { DIRECTION } from "../types";
import IconLockOpen from "/ic_lockOpen.svg";

export interface IPhoneLoginProps {
  onChangeStep: (step: EStepLogin, direction: DIRECTION) => void;
  onLoginPhone: () => void;
}
export default function PhoneLogin(props: IPhoneLoginProps) {
  const { onChangeStep, onLoginPhone } = props;

  return (
    <WrapperAbsolute>
      <Stack spacing={1}>
        <TextLogin>log in</TextLogin>
        <Description>
          Enter your mobile number as registered in the CHI app
        </Description>
      </Stack>
      <SpaceVertical height={40} />
      <FormLoginPhone onChangeStep={onChangeStep} onLoginPhone={onLoginPhone} />
      <SpaceVertical height={40} />
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <img src={IconLockOpen} />
      </Box>
    </WrapperAbsolute>
  );
}
