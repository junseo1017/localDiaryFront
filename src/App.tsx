import { Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import "./app.css";
import { LoginPage } from "./pages/LoginPage";
import { SignupPage } from "./pages/SignupPage";
function App() {
  return (
    <RecoilRoot>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="*" element={<div>error</div>} />
      </Routes>
    </RecoilRoot>
  );
}

export default App;
