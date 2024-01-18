import React, { FC, Suspense, useEffect } from "react";
import PrimaryButton from "../component/common/PrimaryButton";
import MainLoading from "../component/mainpage/MainLoading";
import { ErrorBoundary } from "react-error-boundary";
import ErrorPage from "./ErrorPage";
import MainLogo from "../component/common/MainLogo";

const MainPage: FC = () => {
  return (
    <ErrorBoundary fallback={<ErrorPage />}>
      <Suspense fallback={<MainLoading />}>
        <div className="space-x relative x-screen h-screen">
          <main className="flex flex-col h-full x-5/6 items-center justify-center	pb-10vh">
            <MainLogo />
            <div className="flex flex-col items-center justify-center text-xl">
              <PrimaryButton text={"ログイン"} />
              <PrimaryButton text={"新規登録"} />
            </div>
          </main>
        </div>
      </Suspense>
    </ErrorBoundary>
  );
};

export default MainPage;
