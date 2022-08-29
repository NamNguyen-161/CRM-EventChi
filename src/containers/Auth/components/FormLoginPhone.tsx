import { Autocomplete, Paper, TextField } from "@mui/material";
import React, { memo, useEffect } from "react";
import {
  Controller,
  useForm,
  useFormContext,
  UseFormHandleSubmit,
} from "react-hook-form";
import { Wrapper } from "./styled";
import { countries, CountryType, EStepLogin, ILoginPhone } from "./type";
import { yupResolver } from "@hookform/resolvers/yup";
import CustomCheckbox from "@/components/Checkbox/Checkbox";
import { SpaceVertical } from "@/styles/styled";
import ButtonComponent from "@/components/Buttons/Button";
import { DIRECTION } from "../types";
import { MAX_HEIGHT_SELECT } from "@/utils/types";

export interface IFormLoginPhoneProps {
  onChangeStep: (step: EStepLogin, direction: DIRECTION) => void;
  onLoginPhone: () => void;
}

const Login = (props: IFormLoginPhoneProps) => {
  const { onChangeStep, onLoginPhone } = props;
  const { handleSubmit, control } = useFormContext<ILoginPhone>();

  const onSubmit = (data: ILoginPhone) => {
    onLoginPhone();
  };

  console.log("render FormLoginPhone");

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Wrapper>
        <Controller
          name="country"
          control={control}
          render={({ field: { value, onChange } }) => (
            <Autocomplete
              value={value}
              onChange={(event: any, newValue: CountryType | null) => {
                onChange(newValue);
              }}
              disablePortal
              options={countries}
              clearIcon={null}
              getOptionLabel={(option) =>
                option.code ? "+" + option.code : ""
              }
              isOptionEqualToValue={(option, value) =>
                option.countryCode === value.countryCode
              }
              ListboxProps={{ style: { maxHeight: MAX_HEIGHT_SELECT } }}
              PaperComponent={({ children }) => (
                <Paper
                  style={{
                    color: "rgba(0, 0, 0, 0.87)",
                  }}
                >
                  {children}
                </Paper>
              )}
              renderOption={(props, option) => {
                return (
                  <li {...props} key={option.name}>
                    {option.code ? "+" + option.code : ""}
                  </li>
                );
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Country"
                  variant="filled"
                  InputProps={{ ...params.InputProps, disableUnderline: true }}
                />
              )}
            />
          )}
        />
        <Controller
          name="phone"
          control={control}
          render={({ field: { value, onChange } }) => (
            <TextField
              value={value}
              onChange={onChange}
              variant="filled"
              InputProps={{ disableUnderline: true }}
              label="Phone number"
            />
          )}
        />
      </Wrapper>
      <SpaceVertical height={20} />
      <Controller
        name="remember"
        control={control}
        render={({ field: { value, onChange } }) => (
          <CustomCheckbox
            checked={value}
            onChange={onChange}
            label="Remember me"
          />
        )}
      />
      <SpaceVertical height={27} />
      <ButtonComponent btnStyle={{ minWidth: "183px" }} type="submit">
        Login
      </ButtonComponent>
    </form>
  );
};

const FormLoginPhone = memo(Login);
export default FormLoginPhone;
