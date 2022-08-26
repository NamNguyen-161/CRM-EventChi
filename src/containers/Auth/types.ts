import { IRole, IUserCompany } from "@/apis/auth/types";

export type DIRECTION = "left" | "right";

export interface IRoleState {
  rolesCompany: IUserCompany[];
  roleDefault: IRole[];
}
