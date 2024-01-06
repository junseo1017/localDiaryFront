import React, { FC, Suspense } from "react";
import Logo from "../component/common/Logo";
import BarButton from "../component/common/BarButton";
import { RecoilLoadable } from "recoil";
import MainLoading from "../component/mainpage/MainLoading";

const MainPage: FC = () => {
  return (
    <Suspense fallback={<MainLoading />}>
      <Logo />
      <BarButton />
      <BarButton />
    </Suspense>
  );
};

export default MainPage;
