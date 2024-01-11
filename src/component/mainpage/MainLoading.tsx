import React, { FC } from "react";

const MainLoading: FC = () => {
  return (
    <div className="relative w-full h-screen">
      <img
        className="object-cover w-full h-full"
        src="/images/logo.png"
        alt=""
      />
    </div>
  );
};

export default MainLoading;
