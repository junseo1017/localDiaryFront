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
        <div className="space-x relative w-full h-screen">
          <main className="flex flex-col h-full items-center justify-center	pb-10vh">
            <MainLogo />
            <div>
              <BarButton />
              <BarButton />
            </div>
          </main>
        </div>
      </Suspense>
    </ErrorBoundary>
  );
};

export default MainPage;
