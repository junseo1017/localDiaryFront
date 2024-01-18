import React, { FC } from "react";
type PrimaryButtonType = {
  text: string;
};

const PrimaryButton: FC<PrimaryButtonType> = ({ text }) => {
  return (
    <div className="">
      <button>{text}</button>
    </div>
  );
};

export default PrimaryButton;
