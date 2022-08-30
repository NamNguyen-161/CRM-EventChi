import {
  getListRolesCompanyFn,
  getListRolesDefaultFn,
} from "@/apis/auth/authApi";
import { IRole, IUserCompany } from "@/apis/auth/types";
import ButtonComponent from "@/components/Buttons/Button";
import { ROUTE_CONFIG } from "@/constants/routes";
import { useLoading } from "@/hooks/useLoading";
import { SpaceVertical } from "@/styles/styled";
import {
  getUserId,
  setAuthenticate,
  setOrganizationId,
} from "@/utils/localStorageService";
import { MAX_HEIGHT_SELECT } from "@/utils/types";
import {
  FormControl,
  MenuItem,
  Select,
  InputLabel,
  SelectChangeEvent,
} from "@mui/material";
import { useQueries } from "@tanstack/react-query";
import React, { memo, useCallback, useLayoutEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ListRoleRenderProps } from "./type";
import { onError } from "@/utils/apiHelper";

export interface IFormRoleProps {}

const FormRole = (props: IFormRoleProps) => {
  const userId = getUserId();
  const [selectedRole, setSelectedRole] = useState<string>("");
  const [listRolesRender, setListRolesRender] = useState<
    Array<ListRoleRenderProps>
  >([]);
  const navigation = useNavigate();
  const { showLoading, hideLoading } = useLoading();

  // todo API
  const result = useQueries({
    queries: [
      {
        queryKey: ["role_default"],
        queryFn: () => getListRolesDefaultFn(),
        onError,
        staleTime: Infinity,
      },
      {
        queryKey: ["role_company"],
        queryFn: () => getListRolesCompanyFn({ userId: userId as string }),
        onError,
        staleTime: Infinity,
      },
    ],
  });

  //todo: HANDLE
  const handleChange = (event: SelectChangeEvent) => {
    setSelectedRole(event.target.value);
  };

  const handleDisplayRole = useCallback(
    (rolesCompany: IUserCompany[], rolesDefault: IRole[]) => {
      let newList: ListRoleRenderProps[] = [];
      rolesCompany.forEach((company) => {
        const organization = company.organization;
        company.roles.forEach((roleId) => {
          const name =
            rolesDefault.find((role) => role._id === roleId)?.name || "";
          newList.push({
            name: `${organization.companyName} (${name})`,
            id: `${organization._id}-${roleId}`,
          });
        });
      });
      setListRolesRender(newList);
      newList.length > 0 && setSelectedRole(newList[0].id);
    },
    []
  );

  const onLoginWithRole = () => {
    const id = selectedRole.split("-")[0];
    setOrganizationId(id);
    setAuthenticate(true);
    navigation(ROUTE_CONFIG.HOME);
  };

  //todo: EFFECT
  useLayoutEffect(() => {
    console.log("useEffect");
    if (result[0].isLoading || result[1].isLoading) {
      showLoading();
      return;
    }
    hideLoading();
    const rolesCompany = result[1].data;
    const rolesDefault = result[0].data;
    rolesCompany &&
      rolesDefault &&
      handleDisplayRole(rolesCompany, rolesDefault);
  }, [result[0].isLoading, result[1].isLoading]);

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
      <ButtonComponent fullWidth onClick={onLoginWithRole}>
        continue
      </ButtonComponent>
    </React.Fragment>
  );
};

const FormRoleLogin = memo(FormRole);
export default FormRoleLogin;
