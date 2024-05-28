import React, { Component, FC } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";
import MainLogo from "../component/common/MainLogo";
import LoginForm from "../component/loginpage/LoginForm";

export const LoginPage: FC = () => {
  return (
    <>
      <div className="form-container">
        <div className="flex flex-col h-full w-72 mx-auto items-center justify-center	pb-5vh">
          <div className="w-64 mx-auto m-t">
            <MainLogo />
          </div>
          <LoginForm />
        </div>
      </div>
    </>
  );
};
