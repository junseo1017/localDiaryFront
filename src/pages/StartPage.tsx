import React, { FC, Suspense, useEffect } from "react";
import MainLoading from "../component/startPage/MainLoading";
import { ErrorBoundary } from "react-error-boundary";
import { useNavigate } from "react-router-dom";
import MainLogoLoadable from "../component/common/MainLogoLoadable";
import { ErrorPage } from "./ErrorPage";
import FormButton from "../component/common/form/FormButton";

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
                <FormButton
                  onClickHandler={SignBtnClickHandler}
                  text={"ログイン"}
                />
              </div>
              <div className="w-full h-14">
                <FormButton
                  onClickHandler={SignBtnClickHandler}
                  text={"新規登録"}
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
