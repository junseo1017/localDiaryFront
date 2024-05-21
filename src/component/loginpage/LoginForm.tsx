/** @jsxImportSource @emotion/react */

import React, { FC, useEffect, useRef, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { CheckEmail, CheckPw } from "../../util/regEx";
import { LoginFormType } from "../../model";
import PrimaryButton from "../common/PrimaryButton";
import Divider from "../common/Divider";
import { getUserInfo } from "../../apis";

const LoginForm: FC = () => {
  const navigate = useNavigate();
  const [emailError, setEmailError] = useState<String>("");
  const [passwordError, setPasswordError] = useState<String>("");

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

    // if (checkEmailResult != null) {
    //   setEmailError(checkEmailResult);
    //   return;
    // } else {
    //   setEmailError("");
    // }

    // if (checkPasswordResult != null) {
    //   setPasswordError(checkPasswordResult);
    //   return;
    // } else {
    //   setPasswordError("");
    // }

    const userOb: LoginFormType = { email: email, password: password };
    getUserInfoHandler(userOb);
    //    navigate({ pathname: "/signin" });

    //$form.current?.requestSubmit();
    //navigate({ pathname: "/users" });
  };

  const getUserInfoHandler = async (userOb: LoginFormType) => {
    try {
      const getUserInfoResult: string = await getUserInfo(userOb);
      // log in success
    } catch (e) {
      console.log(e);
      // server Error
    } finally {
      //
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
            <p>{emailError ? emailError : ""}</p>
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
          <p>{passwordError ? passwordError : ""}</p>
        </div>
        <Divider />
        <div className="flex flex-col gap-2">
          <div className="h-12">
            <PrimaryButton
              text={"ログイン"}
              cssOption={"primary-button"}
              onClickHandler={onSignInBtnClickHandler}
            />
          </div>
          <div className="h-12">
            <PrimaryButton
              text={"新規登録"}
              onClickHandler={onSignUpBtnClickHandler}
              cssOption={"primary-button"}
            />
          </div>
        </div>
      </form>
    </main>
  );
};

export default LoginForm;
