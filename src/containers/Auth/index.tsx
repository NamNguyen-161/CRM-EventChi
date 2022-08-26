import React, { useCallback, useEffect, useRef, useState } from "react";
import { EStepLogin, ILoginForm, schemaLogin } from "./components/type";
import { Wrapper } from "./styled";
import PhoneLogin from "./PhoneLogin/PhoneLogin";
import { CSSTransition } from "react-transition-group";
import "./styles.scss";
import { DIRECTION, IRoleState } from "./types";
import OTPLogin from "./OTPLogin/OtpLogin";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import ChooseRole from "./Roles/chooseRole";
import { useMutation } from "@tanstack/react-query";
import {
  fetchAccessTokenFn,
  getListRolesCompanyFn,
  getListRolesDefaultFn,
  loginWithPhoneFn,
} from "@/apis/auth/authApi";
import LoadingIndicator from "@/components/LoadingIndicator/LoadingIndicator";
import { ILoginWithPassCode, IUserId } from "@/apis/auth/types";
import { onError } from "@/utils/apiHelper";
import { ResponseType } from "@/utils/types";
import { AxiosResponse } from "axios";
import { storeToken, storeUserId } from "@/utils/localStorageService";
import { toast } from "react-toastify";

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
  const [roles, setRoles] = useState<IRoleState>({
    roleDefault: [],
    rolesCompany: [],
  });

  const refLoginPhone = useRef(null);
  const refLoginOTP = useRef(null);
  const refLoginRole = useRef(null);

  // API
  const {
    mutate: loginWithPhone,
    isLoading: phoneLoading,
    data: userId,
  } = useMutation((data: string) => loginWithPhoneFn(data), {
    onSuccess: (data) => {
      storeUserId(data);
      onChangeStep(EStepLogin.OTP, "left");
    },
    onError,
  });
  const {
    mutate: loginWithPassCode,
    isLoading: passCodeLoading,
    data: tokenResponse,
  } = useMutation((data: ILoginWithPassCode) => fetchAccessTokenFn(data), {
    onSuccess: (data) => {
      storeToken(data);
    },
    onError,
  });
  const { mutateAsync: getListRolesDefault, isLoading: roleLoading } =
    useMutation(() => getListRolesDefaultFn(), {
      onError,
    });
  const { mutateAsync: getListRolesCompany, isLoading: roleCompanyLoading } =
    useMutation((data: IUserId) => getListRolesCompanyFn(data), {
      onError,
    });

  // EFFECT
  useEffect(() => {
    if (tokenResponse) {
      onGetRole();
    }
  }, [tokenResponse]);

  // HANDLE LOGIC
  const onChangeStep = (step: EStepLogin, direction: DIRECTION) => {
    setStep(step);
    setDirection(direction);
  };

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

  const onGetRole = async () => {
    if (userId) {
      const promise1 = getListRolesCompany({ userId });
      const promise2 = getListRolesDefault();
      await Promise.all([promise1, promise2])
        .then((res) => {
          if (res[0].length && res[1].length) {
            setRoles({ rolesCompany: res[0], roleDefault: res[1] });
            onChangeStep(EStepLogin.ROLE, "left");
          }
        })
        .catch((err) => toast.error(err.message));
    }
  };

  return (
    <Wrapper>
      {(phoneLoading ||
        passCodeLoading ||
        roleLoading ||
        roleCompanyLoading) && <LoadingIndicator />}
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
            <ChooseRole roles={roles} />
          </div>
        </CSSTransition>
      </FormProvider>
    </Wrapper>
  );
}
