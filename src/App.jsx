import React from "react";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Home from "./components/page/Home";
import Login from "./components/page/Login";
import Footer from "./components/layout/Footer";
import Shop from "./components/page/Shop";
import About from "./components/page/About";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/shop"
          element={<Shop data_page={{ title: "Home", link: "/" }} />}
        />
        <Route
          path="/about"
          element={<About data_page={{ title: "Home", link: "/" }} />}
        />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
