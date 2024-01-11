import React, { FC, Suspense } from "react";
import Logo from "../component/common/Logo";
import BarButton from "../component/common/BarButton";
import { RecoilLoadable } from "recoil";
import MainLoading from "../component/mainpage/MainLoading";

const MainPage: FC = () => {
  return (
    <Suspense fallback={<MainLoading />}>
      <h1>MainPage</h1>
      <Logo />
      <BarButton />
      <BarButton />
    </Suspense>
  );
};

export default MainPage;
