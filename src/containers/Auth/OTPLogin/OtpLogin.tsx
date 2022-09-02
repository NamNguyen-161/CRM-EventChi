import React from "react";
import { SpaceVertical } from "@/styles/styled";
import { Box, Stack, styled } from "@mui/material";
import FormOTP from "../components/PassCodeOTP";
import { EStepLogin } from "../components/type";
import { Description, TextLogin, WrapperAbsolute } from "../styled";
import { DIRECTION } from "../types";
import IconArrowBack from "/ic_arrow_back.svg";
import IconPassCode from "/ic_eventChi_passcode.svg";

const CustomBox = styled(Box)(
  ({ theme }) => `
   position: fixed;
   bottom: 34px;
   right: 14px
  `
);

export interface ILoginOTPProps {
  onChangeStep: (step: EStepLogin, direction: DIRECTION) => void;
  onLoginPassCode: () => void;
}

export default function OTPLogin(props: ILoginOTPProps) {
  const { onChangeStep, onLoginPassCode } = props;

  return (
    <WrapperAbsolute>
      <img
        src={IconArrowBack}
        className="pointer"
        onClick={() => onChangeStep(EStepLogin.PHONE_NUMBER, "right")}
      />
      <SpaceVertical height={40} />
      <Stack spacing={1}>
        <TextLogin>PassCode</TextLogin>
        <Description>Enter passcode</Description>
      </Stack>
      <SpaceVertical height={40} />
      <FormOTP onLoginPassCode={onLoginPassCode} />
      <CustomBox>
        <img src={IconPassCode} />
      </CustomBox>
    </WrapperAbsolute>
  );
}
