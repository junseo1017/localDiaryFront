import React, { FC, Suspense, useEffect } from "react";
import BarButton from "../component/common/BarButton";
import MainLoading from "../component/mainpage/MainLoading";
import { ErrorBoundary } from "react-error-boundary";
import ErrorPage from "./ErrorPage";
import MainLogo from "../component/common/MainLogo";

const MainPage: FC = () => {
  return (
    <ErrorBoundary fallback={<ErrorPage />}>
      <Suspense fallback={<MainLoading />}>
        <div className="flex flex-col space-x relative w-full h-screen items-center	justify-start	">
          <MainLogo />
          <div>
            <BarButton />
            <BarButton />
          </div>
        </div>
      </Suspense>
    </ErrorBoundary>
  );
};

export default MainPage;
