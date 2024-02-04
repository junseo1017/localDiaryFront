import React, { Component } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";
import MainLogo from "../component/common/MainLogo";
import LoginForm from "../component/loginpage/LoginForm";

function LoginPage() {
  return (
    <>
      <div className="flex flex-col">
        <div className="w-64 mx-auto m-t">
          <Link to={"/"}>
            <MainLogo />
          </Link>
        </div>
        <LoginForm />
      </div>
    </>
  );
}

export default LoginPage;
