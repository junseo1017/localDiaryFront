/** @jsxImportSource @emotion/react */

import React, { FC, useEffect, useRef, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { CheckEmail, CheckPw } from "../../util/regEx";
import { LoginFormType } from "../../model";
import Divider from "../common/form/Divider";
import { signin } from "../../apis";
import { AxiosError } from "axios";
import FormButton from "../common/form/FormButton";
import FormInput from "../common/form/FormInput";

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
        <div className="flex flex-col gap-10">
          <FormInput type="text" placeholder="Email" name="email" />
          <FormInput type="password" placeholder="Password" name="password" />
        </div>
        <div className="h-12">
          <FormButton
            text={"Sign in"}
            onClickHandler={onSignInBtnClickHandler}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Divider />
          <div className="h-12">
            <FormButton
              text={"Create Account"}
              onClickHandler={onSignUpBtnClickHandler}
            />
          </div>
        </div>
      </form>
    </main>
  );
};

export default LoginForm;
