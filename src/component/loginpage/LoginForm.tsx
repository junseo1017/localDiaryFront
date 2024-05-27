/** @jsxImportSource @emotion/react */

import React, { FC, useEffect, useRef, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { CheckEmail, CheckPw } from "../../util/regEx";
import { LoginFormType } from "../../model";
import PrimaryButton from "../common/PrimaryButton";
import Divider from "../common/Divider";
import { signin } from "../../apis";
import { AxiosError } from "axios";

const LoginForm: FC = () => {
  const navigate = useNavigate();
  const [emailError, setEmailError] = useState<String>("");
  const [passwordError, setPasswordError] = useState<String>("");
  const [globalError, setGlobalError] = useState<String>("");

  const $form = useRef<HTMLFormElement>(null);

  useEffect(() => {}, [emailError, passwordError]);

  const onSignUpBtnClickHandler = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    navigate({ pathname: "/signup" });
  };

  const onSignInBtnClickHandler = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const email = $form.current?.email.value;
    const password = $form.current?.password.value;
    const checkEmailResult = CheckEmail(email);
    const checkPasswordResult = CheckPw(password);

    if (checkEmailResult != null) {
      setEmailError(checkEmailResult);
    } else {
      setEmailError("");
    }

    if (checkPasswordResult != null) {
      setPasswordError(checkPasswordResult);
    } else {
      setPasswordError("");
    }

    if (emailError == "" || passwordError == "") {
      return;
    }
    const loginForm: LoginFormType = { email: email, password: password };
    getUserInfoHandler(loginForm);
  };

  const getUserInfoHandler = async (loginForm: LoginFormType) => {
    try {
      // loading component Start
      const getUserInfoResult: string = await signin(loginForm);
      console.log(getUserInfoResult);

      // log in success,
    } catch (e) {
      if (e instanceof AxiosError) {
        // error
        setGlobalError(e.message);
      }
    } finally {
      // loading Component End
      console.log("execute finally");
    }
  };

  return (
    <main className="w-full">
      <form id="loginForm" className="flex flex-col gap-4" ref={$form}>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <input
              className="form--input"
              autoComplete="off"
              type="text"
              placeholder="Email"
              name="email"
            />
            <p className="text-red-600">{emailError ? emailError : ""}</p>
          </div>
          <div className="flex flex-col">
            <input
              className="form--input"
              autoComplete="off"
              type="password"
              placeholder="Password"
              name="password"
            />
          </div>
          <p className="text-red-600">{passwordError ? passwordError : ""}</p>
        </div>
        <Divider />
        <div className="flex flex-col gap-2">
          <div className="h-12">
            <PrimaryButton
              text={"Sign in"}
              cssOption={"primary-button text-base font-medium"}
              onClickHandler={onSignInBtnClickHandler}
            />
          </div>
          <div className="h-12">
            <PrimaryButton
              text={"Create Account"}
              onClickHandler={onSignUpBtnClickHandler}
              cssOption={"primary-button text-base font-medium"}
            />
          </div>
        </div>
      </form>
    </main>
  );
};

export default LoginForm;
