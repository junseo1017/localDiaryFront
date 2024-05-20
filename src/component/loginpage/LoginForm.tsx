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

  const onLoginFormSubmitHandler: SubmitHandler<LoginFormType> = async (
    data
  ) => {
    navigate({ pathname: "/" });
  };
  const onSignUpBtnClickHandler = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    navigate({ pathname: "/signup" });
  };

  const onSignInBtnClickHandler = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const email = $form.current?.email.value;
    const password = $form.current?.password.value;

    const checkEmailResult = CheckEmail(email);
    if (checkEmailResult != null) {
      setEmailError(checkEmailResult);
      return;
    }

    const checkPasswordResult = CheckPw(password);
    if (checkPasswordResult != null) {
      setEmailError(checkPasswordResult);
      return;
    }
    const userOb: LoginFormType = { email: email, password: password };
    const loggedInUser = await getUserInfo(userOb);
    console.log(loggedInUser);
    //    navigate({ pathname: "/signin" });

    //$form.current?.requestSubmit();
    //navigate({ pathname: "/users" });
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
