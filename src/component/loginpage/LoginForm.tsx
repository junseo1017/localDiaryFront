/** @jsxImportSource @emotion/react */

import React, { FC, useRef } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { css } from "@emotion/react";
import { Link, useNavigate } from "react-router-dom";
import { RegExp } from "../../util/regEx";
import { LoginFormType } from "../../model";
import PrimaryButton from "../common/PrimaryButton";
import Divider from "../common/Divider";

const LoginForm: FC = () => {
  const navigate = useNavigate();
  const $form = useRef<HTMLFormElement>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormType>();

  const onLoginFormSubmitHandler: SubmitHandler<LoginFormType> = async (
    data
  ) => {
    console.log(data);
    navigate({ pathname: "/" });
  };
  const onSignUpBtnClickHandler = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    navigate({ pathname: "/signup" });
  };

  const onSignInBtnClickHandler = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    $form.current?.requestSubmit();
    //navigate({ pathname: "/users" });
  };

  return (
    <main className="w-full">
      <form
        id="loginForm"
        className="flex flex-col gap-4"
        onSubmit={handleSubmit(onLoginFormSubmitHandler)}
        ref={$form}
      >
        <div>
          <div className="flex flex-col mb-5">
            <label className="form--label" htmlFor="id">
              ID
            </label>
            <input
              className="form--input"
              autoComplete="off"
              type="text"
              placeholder="mylocaldiary@gmail.com"
              {...register("id", {
                required: "メールアドレスを入力してください",
                pattern: {
                  value: RegExp.emailType,
                  message: "メールアドレスの形式に合わせて入力してください",
                },
              })}
            />
            <p className="text-red-500">{errors.id ? errors.id.message : ""}</p>
          </div>
          <div className="flex flex-col mb-5">
            <label className="form--label" htmlFor="pw">
              PASSWORD
            </label>
            <input
              className="form--input"
              autoComplete="off"
              type="password"
              placeholder="半角英数8~20文字"
              {...register("pw", { required: "暗証番号を入力してください" })}
            />
            <p className="text-red-500">{errors.pw ? errors.pw.message : ""}</p>
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
