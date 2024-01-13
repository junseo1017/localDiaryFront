import React from "react";
import { useRecoilValue } from "recoil";
import { mainPageLoading } from "../../states";

const BarButton = () => {
  const mainPageState = useRecoilValue(mainPageLoading);

  return <div></div>;
};

export default BarButton;
