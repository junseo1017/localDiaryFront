import React, { FC } from "react";

type FormInputType = {
  name: string;
  type: string | null;
  placeholder: string;
  isError: boolean;
};

const FormInput: FC<FormInputType> = ({ name, placeholder, type, isError }) => {
  return (
    <div>
      <input
        className={isError ? "form-input form-input-error" : "form-input"}
        autoComplete="off"
        type={type ? type : "text"}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
};

export default FormInput;
