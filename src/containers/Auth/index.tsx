import React, { useCallback, useRef, useState } from "react";
import { EStepLogin, ILoginForm, schemaLogin } from "./components/type";
import { Wrapper } from "./styled";
import PhoneLogin from "./PhoneLogin/PhoneLogin";
import { CSSTransition } from "react-transition-group";
import "./styles.scss";
import { DIRECTION } from "./types";
import OTPLogin from "./OTPLogin/OtpLogin";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import ChooseRole from "./Roles/chooseRole";
import { useMutation } from "@tanstack/react-query";
import { fetchAccessTokenFn, loginWithPhoneFn } from "@/apis/auth/authApi";
import LoadingIndicator from "@/components/LoadingIndicator/LoadingIndicator";
import { ILoginWithPassCode, IUserId } from "@/apis/auth/types";
import { onError } from "@/utils/apiHelper";
import {
  setAuthenticate,
  storeToken,
  storeUserId,
} from "@/utils/localStorageService";
import { useLoading } from "@/hooks/useLoading";

export interface IAuthContainerProps {}

export default function AuthContainer(props: IAuthContainerProps) {
  const methods = useForm<ILoginForm>({
    resolver: yupResolver(schemaLogin),
    defaultValues: {
      country: null,
      phone: "",
      remember: false,
      passCode: ["", "", "", ""],
    },
  });
  const { loading } = useLoading();
  const [step, setStep] = useState<EStepLogin>(EStepLogin.PHONE_NUMBER);
  const [direction, setDirection] = useState<DIRECTION>("left");

  const refLoginPhone = useRef(null);
  const refLoginOTP = useRef(null);
  const refLoginRole = useRef(null);

  //todo: API
  const {
    mutate: loginWithPhone,
    isLoading: phoneLoading,
    data: userId,
  } = useMutation((data: string) => loginWithPhoneFn(data), {
    onSuccess: (data) => {
      setAuthenticate(false);
      storeUserId(data);
      onChangeStep(EStepLogin.OTP, "left");
    },
    onError,
  });
  const { mutate: loginWithPassCode, isLoading: passCodeLoading } = useMutation(
    (data: ILoginWithPassCode) => fetchAccessTokenFn(data),
    {
      onSuccess: (data) => {
        storeToken(data);
        onChangeStep(EStepLogin.ROLE, "left");
      },
      onError,
    }
  );

  //todo: HANDLE LOGIC
  const onChangeStep = useCallback((step: EStepLogin, direction: DIRECTION) => {
    setStep(step);
    setDirection(direction);
  }, []);

  const onLoginPhone = () => {
    const { passCode, ...rest } = methods.getValues();
    const { country, phone } = rest;
    const phoneNumber = `+${country?.code}${phone}`;
    loginWithPhone(phoneNumber);
  };

  const onLoginPassCode = () => {
    const { passCode } = methods.getValues();
    const _passCode = passCode.join("");
    if (userId) {
      const data = {
        userId,
        passCode: _passCode,
      };
      loginWithPassCode(data);
    }
  };

  return (
    <Wrapper>
      {(phoneLoading || passCodeLoading || loading) && <LoadingIndicator />}
      <FormProvider {...methods}>
        <CSSTransition
          nodeRef={refLoginPhone}
          key={EStepLogin.PHONE_NUMBER}
          in={step === EStepLogin.PHONE_NUMBER}
          classNames={`slide-${direction}`}
          timeout={200}
          unmountOnExit
        >
          <div ref={refLoginPhone}>
            <PhoneLogin
              onChangeStep={onChangeStep}
              onLoginPhone={onLoginPhone}
            />
          </div>
        </CSSTransition>
        <CSSTransition
          nodeRef={refLoginOTP}
          key={EStepLogin.OTP}
          in={step === EStepLogin.OTP}
          classNames={`slide-${direction}`}
          timeout={200}
          unmountOnExit
        >
          <div ref={refLoginOTP}>
            <OTPLogin
              onChangeStep={onChangeStep}
              onLoginPassCode={onLoginPassCode}
            />
          </div>
        </CSSTransition>
        <CSSTransition
          nodeRef={refLoginRole}
          key={EStepLogin.ROLE}
          in={step === EStepLogin.ROLE}
          classNames={`slide-${direction}`}
          timeout={200}
          unmountOnExit
        >
          <div ref={refLoginRole}>
            <ChooseRole />
          </div>
        </CSSTransition>
      </FormProvider>
    </Wrapper>
  );
}
