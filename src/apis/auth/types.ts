import { AxiosResponse } from "axios";

export interface ITokenResponse {
  access_token: string;
  refresh_token: string;
}

export interface ILoginWithPassCode {
  userId: string;
  passCode: string;
}

export interface IRole {
  _id: string;
  code: string;
  name: string;
}

export interface IOrganization {
  companyName: string;
  createdAt: string;
  updatedAt: string;
  website: string;
  _id: string;
}

export interface IUserCompany {
  organization: IOrganization;
  roles: string[];
  userId: string;
  _id: string;
}

export interface IUserId {
  userId: string;
}

export interface IUserInfo {
  bankAccounts: Array<IBankAccount>;
  companyId?: ICompanyDetails;
  phoneNumber: string;
  role: Array<string>;
  birthday: string;
  countryOfResidence: string;
  email: string;
  firstName: string;
  lastName: string;
  nationality: string;
  profileUrl: string;
  documents?: Array<Document>;
}

export interface ICompanyDetails {
  bankAccounts: Array<IBankAccount>;
  companyName: string;
  website: string;
  email: string;
  address1: string;
  address2: string;
  postalCode: string;
  city: string;
  region: string;
  country: any;
  chamberCommerce: string;
  phoneNumber: string;
  _id: string;
}

export interface IBankAccount {
  OwnerName: string;
  AddressLine1: string;
  AddressLine2?: string;
  City: string;
  Region: string;
  PostalCode: string;
  Country: string;
  Type: string;
  BankName?: string;
  AccountNumber?: string;
  ABA?: string;
  BranchCode?: string;
  InstitutionNumber?: string;
  SortCode?: string;
  BIC?: string;
  IBAN?: string;
  _id?: string;
}

export interface IDocument {
  fileName: string;
  filePath: string;
  mimetype: string;
  documentType: string;
  accountId: string;
  _id: string;
  status: string;
}
