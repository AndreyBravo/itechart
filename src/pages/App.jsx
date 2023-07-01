import { Route, Routes } from "react-router-dom";
import Login from "../components/Login";
import Singup from "../components/Singup";
import NotFoundPage from "./NotFoundPage";

export default function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/singup" element={<Singup/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
    </div>
  );
};


