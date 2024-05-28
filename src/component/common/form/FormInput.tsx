import React, { FC } from "react";

type FormInputType = {
  name: string;
  type: string | null;
  placeholder: string;
};

const FormInput: FC<FormInputType> = ({ name, placeholder, type }) => {
  return (
    <div>
      <input
        className="form-input"
        autoComplete="off"
        type={type ? type : "text"}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
};

export default FormInput;
