import React, { FC, Suspense, useEffect } from "react";
import PrimaryButton from "../component/common/PrimaryButton";
import MainLoading from "../component/mainpage/MainLoading";
import { ErrorBoundary } from "react-error-boundary";
import ErrorPage from "./ErrorPage";
import MainLogo from "../component/common/MainLogo";
import { useNavigate } from "react-router-dom";

const MainPage: FC = () => {
  const navigate = useNavigate();

  const SignBtnClickHandler = (e: React.MouseEvent<HTMLElement>) => {
    navigate({ pathname: `/login` });
  };

  return (
    <ErrorBoundary fallback={<ErrorPage />}>
      <Suspense fallback={<MainLoading />}>
        <div className="space-x relative x-screen h-screen">
          <main className="flex flex-col h-full w-4/6 mx-auto items-center justify-center	pb-10vh">
            <MainLogo />
            <div className="flex flex-col items-center w-full justify-center text-xl gap-2">
              <div className="w-full h-10">
                <PrimaryButton
                  onClickHandler={SignBtnClickHandler}
                  text={"ログイン"}
                  bgcolor={"bg-black"}
                />
              </div>
              <div className="w-full h-10">
                <PrimaryButton
                  onClickHandler={SignBtnClickHandler}
                  text={"新規登録"}
                  bgcolor={"bg-black"}
                />
              </div>
            </div>
          </main>
        </div>
      </Suspense>
    </ErrorBoundary>
  );
};

export default MainPage;
