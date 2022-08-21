import { Autocomplete, Paper, TextField } from "@mui/material";
import React, { memo } from "react";
import { Controller, useForm } from "react-hook-form";
import { Wrapper } from "./styled";
import { countries, CountryType, ILoginForm, schemaLogin } from "./type";
import { yupResolver } from "@hookform/resolvers/yup";
import CustomCheckbox from "@/components/Checkbox/Checkbox";
import { SpaceVertical } from "@/styles/styled";

export interface IFormLoginPhoneProps {}

const Login = (props: IFormLoginPhoneProps) => {
  const { handleSubmit, control, watch } = useForm<ILoginForm>({
    resolver: yupResolver(schemaLogin),
  });

  const onSubmit = (data: ILoginForm) => console.log("Submit:", data);

  console.log("Autocomplete:", watch("country"));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Wrapper>
        <Controller
          name="country"
          control={control}
          render={({ field: { value, onChange } }) => (
            <Autocomplete
              value={value ?? null}
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
          render={({ field: { value, onChange, ref } }) => (
            <TextField
              value={value}
              onChange={onChange}
              inputRef={ref}
              variant="filled"
              InputProps={{ disableUnderline: true }}
              label="Phone number"
            />
          )}
          name="phone"
          control={control}
        />
      </Wrapper>
      <SpaceVertical height={20} />
      <CustomCheckbox />
    </form>
  );
};

const FormLogin = memo(Login);
export default FormLogin;
