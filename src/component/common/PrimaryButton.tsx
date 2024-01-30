import React, { FC } from "react";

type PrimaryButtonType = {
  text: string;
  bgcolor: string;
  onClickHandler: (e: React.MouseEvent<HTMLElement>) => void;
};

const PrimaryButton: FC<PrimaryButtonType> = ({
  text,
  bgcolor,
  onClickHandler,
}) => {
  return (
    <div className="w-full h-full">
      <button
        onClick={onClickHandler}
        className={bgcolor + " w-full rounded-lg text-white h-full"}
      >
        {text}
      </button>
    </div>
  );
};

export default PrimaryButton;
