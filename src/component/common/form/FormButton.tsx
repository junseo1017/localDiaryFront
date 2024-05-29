import React, { FC } from "react";
import { LineWave } from "react-loader-spinner";

type PrimaryButtonType = {
  text: string;
  onClickHandler: (e: React.MouseEvent<HTMLElement>) => void;
};

const FormButton: FC<PrimaryButtonType> = ({ text, onClickHandler }) => {
  return (
    <div className="w-full h-full">
      <button onClick={onClickHandler} className="form-button" type="button">
        {text}
      </button>
    </div>
  );
};
export default FormButton;
