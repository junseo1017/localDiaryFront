import React from "react";
import { LineWave } from "react-loader-spinner";

const FormButtonLoading = () => {
  return (
    <div
      className="w-full h-full relative"
      style={{
        backgroundColor: "#b2c0dd",
        display: "flex",
        borderRadius: "0.5rem",
      }}
    >
      <LineWave
        wrapperStyle={{
          width: "50%",
          position: "absolute",
          left: "40%",
          top: "-2.6rem",
        }}
        width={100}
        height={100}
        firstLineColor="white"
        middleLineColor="white"
        lastLineColor="white"
      />
    </div>
  );
};

export default FormButtonLoading;
