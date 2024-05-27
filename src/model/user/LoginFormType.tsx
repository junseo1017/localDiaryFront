import { userInfo } from "os";

export type LoginFormType = {
  email: string;
  password: string;
};

export type UserInfo = {
  email: string;
  name: string;
};

export type LoginFormError = {
  errorCode: string;
  Errors: FormErrorField[];
};

export type FormErrorField = {
  errorField: string;
  errorMessage: string;
};
