import { AxiosResponse } from "axios";

export interface ITokenResponse {
  access_token: string;
  refresh_token: string;
}

export interface ILoginWithPassCode {
  userId: AxiosResponse<string, any>;
  passCode: string;
}
