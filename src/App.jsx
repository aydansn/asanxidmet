import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import React, { Component } from "react";
import Home from "./pages/Home";
import System from "./pages/System";
import User from "./pages/User";
import About from "./pages/About";
import Navbars from "./components/Navbars/Navbars";
import Stuation from "./pages/Stuation";
import Rollars from "./pages/Rollars";

const App = () => {
  return (
    <div>
      <Navbars title="Managment" />
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/system" element={<System />} />
            <Route path="/user" element={<User />} />
            <Route path="/about" element={<About />} />
            <Route path="/stuation" element={<Stuation />} />
            <Route path="/rollars" element={<Rollars />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
