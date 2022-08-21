import { Autocomplete, Paper, TextField } from "@mui/material";
import React, { memo } from "react";
import { Controller, useForm } from "react-hook-form";
import { Wrapper } from "./styled";
import { countries, CountryType, ILoginForm, schemaLogin } from "./type";
import { yupResolver } from "@hookform/resolvers/yup";
import CustomCheckbox from "@/components/Checkbox/Checkbox";
import { SpaceVertical } from "@/styles/styled";
import ButtonAuthScreen from "@/components/Buttons/ButtonAuthScreen";

export interface IFormLoginPhoneProps {}

const Login = (props: IFormLoginPhoneProps) => {
  const { handleSubmit, control } = useForm<ILoginForm>({
    resolver: yupResolver(schemaLogin),
    defaultValues: {
      country: null,
      phone: "",
      remember: false,
    },
  });

  const onSubmit = (data: ILoginForm) => console.log("Submit:", data);

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
              ListboxProps={{ style: { maxHeight: "300px" } }}
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
                  <li {...props} key={option.countryCode}>
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
          <CustomCheckbox checked={value} onChange={onChange} />
        )}
      />
      <SpaceVertical height={27} />
      <ButtonAuthScreen btnStyle={{ minWidth: "183px" }} type="submit">
        Login
      </ButtonAuthScreen>
    </form>
  );
};

const FormLogin = memo(Login);
export default FormLogin;
