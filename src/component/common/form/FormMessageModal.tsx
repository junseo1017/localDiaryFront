import { type } from "os";
import React, { FC } from "react";

type FormMessageModalPropsType = {
  message: string;
};

const FormMessageModal: FC<FormMessageModalPropsType> = ({ message }) => {
  return (
    <div className="fixed h-screen w-screen">
      <p>{message}</p>
    </div>
  );
};

export default FormMessageModal;
