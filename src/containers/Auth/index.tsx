import ButtonAuthScreen from "@/components/Buttons/ButtonAuthScreen";
import { SpaceVertical } from "@/styles/styled";
import { Box, Stack } from "@mui/material";
import React from "react";
import FormLogin from "./components/FormLoginPhone";
import { Description, Login, Wrapper } from "./styled";
import IconLockOpen from "/ic_lockOpen.svg";

export interface IAuthContainerProps {}

export default function AuthContainer(props: IAuthContainerProps) {
  return (
    <Wrapper>
      <Stack spacing={1}>
        <Login>log in</Login>
        <Description>
          Enter your mobile number as registered in the CHI app
        </Description>
      </Stack>
      <SpaceVertical height={40} />
      <FormLogin />
      <SpaceVertical height={27} />
      <ButtonAuthScreen btnStyle={{ minWidth: "183px" }}>
        Login
      </ButtonAuthScreen>
      <SpaceVertical height={40} />
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <img src={IconLockOpen} />
      </Box>
    </Wrapper>
  );
}
