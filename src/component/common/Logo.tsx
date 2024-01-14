import React, { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { mainPageLoading } from "../../states";

const Logo = () => {
  const mainPageState = useRecoilValue(mainPageLoading);

  return (
    <div className="relative">
      <img className="" src="/images/logo.png" alt="" />
    </div>
  );
};

export default Logo;
