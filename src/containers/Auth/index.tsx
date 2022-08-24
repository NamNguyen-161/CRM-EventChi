import React, { useRef, useState } from "react";
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

  const [step, setStep] = useState<EStepLogin>(EStepLogin.PHONE_NUMBER);
  const [direction, setDirection] = useState<DIRECTION>("left");

  const refLoginPhone = useRef(null);
  const refLoginOTP = useRef(null);
  const refLoginRole = useRef(null);

  const onChangeStep = (step: EStepLogin, direction: DIRECTION) => {
    setStep(step);
    setDirection(direction);
  };

  const onLoginPhone = () => {
    const { passCode, ...rest } = methods.getValues();
    console.log({ ...rest });
    onChangeStep(EStepLogin.OTP, "left");
  };

  const onLoginPassCode = () => {
    const { passCode } = methods.getValues();
    onChangeStep(EStepLogin.ROLE, "left");
    console.log({ passCode });
  };

  return (
    <Wrapper>
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
