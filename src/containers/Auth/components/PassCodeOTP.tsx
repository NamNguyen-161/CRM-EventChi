import React, { memo, useCallback } from "react";
import OTPInput from "@/components/OTPInput";
import { useFormContext, Controller } from "react-hook-form";
import { ILoginOTP } from "./type";
import { isEmpty } from "lodash";

const style = {
  display: "inline-flex",
  gap: "8px",
};

export interface IPassCodeOTPProps {
  onLoginPassCode: () => void;
}

const PassCodeOTP = (props: IPassCodeOTPProps) => {
  const { onLoginPassCode } = props;
  const { control } = useFormContext<ILoginOTP>();

  const handleCheckOTP = (otp: Array<string>) => {
    const value = otp.findIndex((item) => item.length === 0);
    return value === -1 && onLoginPassCode();
  };

  console.log("render FormOTP");

  return (
    <Controller
      control={control}
      name="passCode"
      render={({ field: { value, onChange } }) => (
        <OTPInput
          value={value}
          autoFocus
          isNumberInput
          length={4}
          style={style}
          onChangeOTP={(otp) => {
            onChange(otp);
            handleCheckOTP(otp);
          }}
        />
      )}
    />
  );
};

const FormOTP = memo(PassCodeOTP);
export default FormOTP;
