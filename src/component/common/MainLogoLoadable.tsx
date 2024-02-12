/** @jsxImportSource @emotion/react */

import React, { FC, useEffect } from "react";
import { Link } from "react-router-dom";
import { useRecoilValue, useRecoilValueLoadable } from "recoil";
import { MainLogoCss } from "../../model";
import { mainPageLoading } from "../../states";

// 非同期実装のため（RecoilValueLoadable,Suspenseテスト用）
const MainLogoLoadable: FC<MainLogoCss> = () => {
  const mainPageState = useRecoilValueLoadable(mainPageLoading);

  return (
    <div className="w-full mb-16">
      <Link to={"/"}>
        <img
          className="w-full mx-auto"
          src="/images/logoFullNameSizeCut.png"
          alt=""
        />
      </Link>
    </div>
  );
};

export default MainLogoLoadable;
