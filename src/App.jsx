import React, { useState } from "react";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Home from "./components/page/Home";
import Login from "./components/page/Login";
import Footer from "./components/layout/Footer";
import Shop from "./components/page/Shop";
import About from "./components/page/About";
import DetailProduct from "./components/page/Shop/DetailProduct";

function App() {
  const [isLogin, setIsLogin] = useState(true);
  const handleIsLogin = () => {
    setIsLogin(false)
  }
  return (
    <div className="app">
      {
        isLogin && (
          <>
            <Header handleIsLogin={handleIsLogin} />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/shop"
                element={<Shop />}
              />
              <Route
                path="/about"
                element={<About />}
              />
              <Route
                path="/shop/:productId"
                element={<DetailProduct />}
              />
              <Route path="/login" element={<Login />} />
            </Routes>
            <Footer />
          </>
        )
      }
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>

    </div>
  );
}

export default App;
