import React from "react";
import NavigateBtn from "../common/NavigateBtn";
import SearchBar from "../common/SearchBar";

const Header = () => {
  return (
    <div>
      <div>
        <SearchBar />
        <NavigateBtn addTextProps="login" />
      </div>
    </div>
  );
};

export default Header;
