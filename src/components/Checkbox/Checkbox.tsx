import {
  Checkbox,
  CheckboxProps,
  FormControlLabel,
  styled,
} from "@mui/material";
import React, { memo } from "react";

const CustomFormLabel = styled(FormControlLabel)(({ theme }) => ({
  "& .MuiFormControlLabel-label": {
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "20px",
    color: "rgba(0, 0, 0, 0.6)",
    opacity: 0.8,
    userSelect: "none",
    paddingLeft: "10px",
  },
}));

export interface IPassCodeProps extends CheckboxProps {}

const CheckboxStyle = (props: IPassCodeProps) => {
  const { ...checkboxProps } = props;
  return (
    <CustomFormLabel
      value="end"
      control={<Checkbox color="primary" {...checkboxProps} />}
      label="Remember me"
    />
  );
};

const CustomCheckbox = memo(CheckboxStyle);

export default CustomCheckbox;
