/** @jsxImportSource @emotion/react */

import React, { FC, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { MainLogoCss } from "../../model";
import { mainPageLoading } from "../../states";

const MainLogo: FC<MainLogoCss> = () => {
  const mainPageState = useRecoilValue(mainPageLoading);

  return (
    <div className="x-screen">
      <img className="x-screen mx-auto" src="/images/logoFullName.png" alt="" />
    </div>
  );
};

export default MainLogo;
