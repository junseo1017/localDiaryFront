/** @jsxImportSource @emotion/react */

import React, { FC, useEffect } from "react";
import { Link } from "react-router-dom";

const MainLogo: FC = () => {
  return (
    <div className="w-full mb-12">
      <Link to={"/"}>
        <img
          className="w-full mx-auto"
          src="/images/logo.png"
          alt="ロゴイメージ"
        />
      </Link>
    </div>
  );
};

export default MainLogo;
