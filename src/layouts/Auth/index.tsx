import React, { FC, memo } from "react";
import { IChildren } from "@/utils/types";
import {
  AbsoluteLayout,
  BtnGetApp,
  Wrapper,
  TextGetAccount,
  ContainerLayout,
} from "./styled";
import "./auth.scss";
import IconEvenChiLogin from "/ic_evenChi_login.png";
import IconChi from "/ic_chi.svg";
import { Stack } from "@mui/material";

const Auth: FC<IChildren> = ({ children }) => {
  return (
    <Wrapper>
      <AbsoluteLayout />
      <ContainerLayout>
        <div className="main">
          <div className="main__header">
            <div>
              <img src={IconEvenChiLogin} />
            </div>
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={2}
            >
              <TextGetAccount>Don’t have an account yet?</TextGetAccount>
              <BtnGetApp>get the app</BtnGetApp>
            </Stack>
          </div>
          <div className="main__body">
            <div className="main__body-left">
              <Stack spacing={5} display="grid">
                <img src={IconChi} />
                <Stack spacing={1}>
                  <p className="backstage">Backstage</p>
                  <p className="self-service">
                    Self-service portal for organisers and other event
                    stakeholders
                  </p>
                </Stack>
              </Stack>
            </div>
            <div className="main__body-right">
              <div className="filter-layout-1" />
              <div className="filter-layout-2" />
              {children}
            </div>
          </div>
        </div>
      </ContainerLayout>
    </Wrapper>
  );
};

const AuthLayout = memo(Auth);
export default AuthLayout;
