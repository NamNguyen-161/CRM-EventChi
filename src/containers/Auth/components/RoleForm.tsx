import ButtonComponent from "@/components/Buttons/Button";
import { ROUTE_CONFIG } from "@/constants/routes";
import { SpaceVertical } from "@/styles/styled";
import { MAX_HEIGHT_SELECT } from "@/utils/types";
import {
  FormControl,
  MenuItem,
  Select,
  InputLabel,
  SelectChangeEvent,
} from "@mui/material";
import React, { memo, useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IRoleState } from "../types";
import { ListRoleRenderProps } from "./type";

export interface IFormRoleProps {
  roles: IRoleState;
}

const FormRole = (props: IFormRoleProps) => {
  const { roles } = props;
  const [selectedRole, setSelectedRole] = useState<string>("");
  const [listRolesRender, setListRolesRender] = useState<
    Array<ListRoleRenderProps>
  >([]);
  const navigation = useNavigate();

  // HANDLE
  const handleChange = (event: SelectChangeEvent) => {
    setSelectedRole(event.target.value);
  };

  const getNameRoleById = useCallback(
    (id: string) => {
      const name =
        roles.roleDefault.find((role) => role._id === id)?.name || "";
      return name;
    },
    [roles]
  );

  // EFFECT
  useEffect(() => {
    let newList: ListRoleRenderProps[] = [];
    roles.rolesCompany.forEach((company) => {
      const organization = company.organization;
      company.roles.forEach((roleId) => {
        newList.push({
          name: `${organization.companyName} (${getNameRoleById(roleId)})`,
          id: `${organization._id}-${roleId}`,
        });
      });
    });
    setListRolesRender(newList);

    newList.length > 0 && setSelectedRole(newList[0].id);
  }, [roles]);

  return (
    <React.Fragment>
      <FormControl variant="filled" fullWidth>
        <InputLabel id="demo-simple-select-filled-label">
          Choose role
        </InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={selectedRole}
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
          {listRolesRender.map((role, index) => (
            <MenuItem value={role.id} key={index}>
              {role.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <SpaceVertical height={24} />
      <ButtonComponent fullWidth onClick={() => navigation(ROUTE_CONFIG.HOME)}>
        continue
      </ButtonComponent>
    </React.Fragment>
  );
};

const FormRoleLogin = memo(FormRole);
export default FormRoleLogin;
