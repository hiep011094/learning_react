import React from "react";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Header from "./component/layout/Header";
import Home from "./component/page/Home";
import Login from "./component/page/Login";

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
