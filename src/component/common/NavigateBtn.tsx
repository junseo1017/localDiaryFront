import React, { FC, useState } from "react";

interface TextProp {
  text: string;
}

const NavigateBtn: FC<TextProp> = (textProps: TextProp) => {
  const [textProp, setTextProp] = useState<String>(textProps.text);

  return <button>{textProp}</button>;
};

export default NavigateBtn;
