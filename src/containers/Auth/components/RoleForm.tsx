import ButtonComponent from "@/components/Buttons/Button";
import { SpaceVertical } from "@/styles/styled";
import { MAX_HEIGHT_SELECT } from "@/utils/types";
import {
  FormControl,
  MenuItem,
  Select,
  InputLabel,
  SelectChangeEvent,
} from "@mui/material";
import { Space } from "antd";
import React, { memo } from "react";

export interface IFormRoleProps {}

const FormRole = (props: IFormRoleProps) => {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };
  return (
    <React.Fragment>
      <FormControl variant="filled" fullWidth>
        <InputLabel id="demo-simple-select-filled-label">
          Choose role
        </InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={age}
          onChange={handleChange}
          disableUnderline
          MenuProps={{
            anchorOrigin: {
              vertical: "bottom",
              horizontal: "center",
            },
            PaperProps: { sx: { maxHeight: MAX_HEIGHT_SELECT } },
          }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <SpaceVertical height={24} />
      <ButtonComponent fullWidth>continue</ButtonComponent>
    </React.Fragment>
  );
};

const FormRoleLogin = memo(FormRole);
export default FormRoleLogin;
