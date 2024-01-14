import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { constProperties } from "./constant/constant";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import "./app.css";
function App() {
  return (
    <RecoilRoot>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<div>error</div>} />
      </Routes>
    </RecoilRoot>
  );
}

export default App;
