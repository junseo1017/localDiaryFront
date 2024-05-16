import React, { FC, Suspense, useEffect } from "react";
import PrimaryButton from "../component/common/PrimaryButton";
import MainLoading from "../component/startPage/MainLoading";
import { ErrorBoundary } from "react-error-boundary";
import ErrorPage from "./ErrorPage";
import { useNavigate } from "react-router-dom";
import MainLogoLoadable from "../component/common/MainLogoLoadable";

const StartPage: FC = () => {
  const navigate = useNavigate();

  const SignBtnClickHandler = (e: React.MouseEvent<HTMLElement>) => {
    navigate({ pathname: `/login` });
  };

  return (
    <ErrorBoundary fallback={<ErrorPage />}>
      <Suspense fallback={<MainLoading />}>
        <div className="x-screen h-screen">
          <main className="flex flex-col h-full w-72 mx-auto items-center justify-center pb-10vh">
            <MainLogoLoadable />
            <div className="flex flex-col items-center w-full justify-center text-xl gap-2">
              <div className="w-full h-14">
                <PrimaryButton
                  onClickHandler={SignBtnClickHandler}
                  text={"ログイン"}
                  cssOption={"primary-button"}
                />
              </div>
              <div className="w-full h-14">
                <PrimaryButton
                  onClickHandler={SignBtnClickHandler}
                  text={"新規登録"}
                  cssOption={"primary-button"}
                />
              </div>
            </div>
          </main>
        </div>
      </Suspense>
    </ErrorBoundary>
  );
};

export default StartPage;
