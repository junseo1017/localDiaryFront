import React, { FC } from "react";

type PrimaryButtonType = {
  text: string;
  onClickHandler: (e: React.MouseEvent<HTMLElement>) => void;
};

const FormButton: FC<PrimaryButtonType> = ({ text, onClickHandler }) => {
  return (
    <div className="w-full h-full">
      <button
        onClick={onClickHandler}
        className="form-button text-base font-medium"
        type="button"
      >
        {text}
      </button>
    </div>
  );
};
export default FormButton;
