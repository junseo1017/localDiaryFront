import React, { Component } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";
import MainLogo from "../component/common/MainLogo";
import LoginForm from "../component/loginpage/LoginForm";

function LoginPage() {
  return (
    <>
      <div className="w-4/6 mx-auto">
        <Link to={"/"}>
          <MainLogo />
        </Link>
      </div>
      <LoginForm />
    </>
  );
}

export default LoginPage;
