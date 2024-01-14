import React, { FC, Suspense, useEffect } from "react";
import Logo from "../component/common/Logo";
import BarButton from "../component/common/BarButton";
import { useRecoilValue } from "recoil";
import { mainPageLoading } from "../states";
import MainLoading from "../component/mainpage/MainLoading";
import { ErrorBoundary } from "react-error-boundary";
import ErrorPage from "./ErrorPage";

const MainPage: FC = () => {
  return (
    <ErrorBoundary fallback={<ErrorPage />}>
      <Suspense fallback={<MainLoading />}>
        <h1>MainPage</h1>
        <Logo />
        <BarButton />
        <BarButton />
      </Suspense>
    </ErrorBoundary>
  );
};

export default MainPage;
