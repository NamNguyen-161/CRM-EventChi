import ButtonAuthScreen from "@/components/Buttons/ButtonAuthScreen";
import { SpaceVertical } from "@/styles/styled";
import { Box, Stack } from "@mui/material";
import React, { memo } from "react";
import FormLogin from "./components/FormLoginPhone";
import { Description, TextLogin } from "./styled";
import IconLockOpen from "/ic_lockOpen.svg";

export interface ILoginByPhoneProps {}

const LoginByPhone = (props: ILoginByPhoneProps) => {
  return (
    <React.Fragment>
      <Stack spacing={1}>
        <TextLogin>log in</TextLogin>
        <Description>
          Enter your mobile number as registered in the CHI app
        </Description>
      </Stack>
      <SpaceVertical height={40} />
      <FormLogin />
      <SpaceVertical height={40} />
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <img src={IconLockOpen} />
      </Box>
    </React.Fragment>
  );
};

const PhoneLogin = memo(LoginByPhone);
export default PhoneLogin;
