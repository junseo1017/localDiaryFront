/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import React, { FC } from "react";

const dividerContainerStyle = css`
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const dividerLineStyle = css`
  margin: 0;
  min-width: 0;
  height: 1px;
  flex: 1;
  background-color: lightgray;
`;
const dividerTextStyle = css`
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  padding-left: 16px;
  padding-right: 16px;
`;

const Divider: FC = () => {
  return (
    <div css={dividerContainerStyle}>
      <div css={dividerLineStyle}></div>
      <span css={dividerTextStyle}>or</span>
      <div css={dividerLineStyle}></div>
    </div>
  );
};

export default Divider;
