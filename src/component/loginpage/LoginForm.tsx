/** @jsxImportSource @emotion/react */

import React, { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { css } from "@emotion/react";
import { FormInput } from "../../style/component/formInput";
import { Link, useNavigate } from "react-router-dom";
import { RegExp } from "../../util/regEx";

interface LoginFormValue {
  id: string;
  pw: string;
}

const LoginForm: FC = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValue>();
  const onLoginFormSubmitHandler: SubmitHandler<LoginFormValue> = async (
    data
  ) => {
    console.log(data);
    navigate({ pathname: "/" });
  };
  const onSignUpBtnClickHandler = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    navigate({ pathname: "/signup" });
  };

  return (
    <div>
      <div>
        <h1>
          <Link to={"/"}>My Local Diary</Link>
        </h1>
      </div>
      <main>
        <h2>ログイン</h2>
        <form onSubmit={handleSubmit(onLoginFormSubmitHandler)}>
          <label htmlFor="id">メールアドレス</label>
          <input
            className="bg-indigo-500"
            css={FormInput}
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
          <p>{errors.id ? errors.id.message : ""}</p>
          <label htmlFor="pw">パスワード</label>
          <input
            css={FormInput}
            autoComplete="off"
            type="password"
            placeholder="半角英数8~20文字"
            {...register("pw", { required: "暗証番号を入力してください" })}
          />
          <p>{errors.pw ? errors.pw.message : ""}</p>

          <div>
            <button type="submit">ログイン</button>
            <button onClick={onSignUpBtnClickHandler}>新規登録</button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default LoginForm;
