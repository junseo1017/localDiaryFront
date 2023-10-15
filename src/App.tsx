import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { constProperties } from "./constant/constant";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import "./app.css";
function App() {
  const [hello, setHello] = useState("");

  // useEffect(() => {
  //   axios
  //     .get("/test")
  //     .then((response) => setHello(response.data))
  //     .catch((error) => console.log(error));
  // }, []);

  return (
    <RecoilRoot>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </RecoilRoot>
  );
}

export default App;
