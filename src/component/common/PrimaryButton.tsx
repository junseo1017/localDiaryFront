import React, { FC } from "react";

type PrimaryButtonType = {
  text: string;
  cssOption: string;
  onClickHandler: (e: React.MouseEvent<HTMLElement>) => void;
};

const PrimaryButton: FC<PrimaryButtonType> = ({
  text,
  cssOption,
  onClickHandler,
}) => {
  return (
    <div className="w-full h-full">
      <button onClick={onClickHandler} className={cssOption}>
        {text}
      </button>
    </div>
  );
};
export default PrimaryButton;
