import React, { Component, FC } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";
import MainLogo from "../component/common/MainLogo";
import LoginForm from "../component/loginpage/LoginForm";
import ErrorPage from "./ErrorPage";

const LoginPage: FC = () => {
  return (
    <>
      <div className="x-screen h-screen">
        <div className="flex flex-col h-full w-72 mx-auto items-center justify-center	pb-10vh">
          <div className="w-64 mx-auto m-t">
            <MainLogo />
          </div>
          <LoginForm />
        </div>
      </div>
    </>
  );
};

export default LoginPage;
