import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!sessionStorage.getItem("uId")) {
      navigate("/signin");
    }
  }, []);
  return <h1>mainPage</h1>;
};

export default MainPage;
