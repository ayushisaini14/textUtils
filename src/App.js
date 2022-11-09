import { useState } from "react";
import "./App.css";
import About from "./components/About";
import MainBody from "./components/MainBody";
import Navbar from "./components/Navbar";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, nextMode] = useState("light");

  const changeMode = () => {
    if (mode === "dark") {
      nextMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "#6c757d";
    } else {
      nextMode("dark");
      document.body.style.backgroundColor = "#6c757d";
      document.body.style.color = "white";
    }
  };
  return (
    <BrowserRouter>
      <Navbar title="TextUtils" mode={mode} changeMode={changeMode} />
      <Routes>
        <Route
          path="about"
          element={
            <div className="container">
              <About mode={mode} />
            </div>
          }
        />

        <Route
          path="/"
          element={
            <div className="container">
              <MainBody />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
