import { useEffect, useState } from "react";

import "./App.css";
import { Muitable } from "./pages/Muitable";

import Cartcontainer from "./pages/Cartcontainer";
import Pnavbar from "./components/header/Pnavbar";
import { AdminDashboard } from "./pages/AdminDashboard";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Charts } from "./pages/Charts";

function App() {
  useEffect(() => {
    console.log("changescreen");
  }, []);
  return (
    <>
      <BrowserRouter>
        <Pnavbar />
        <Routes>
          <Route path="/" element={<AdminDashboard />} />
          <Route path="/admin-Dashboard" element={<Navigate to="/" />} />
          <Route path="/UserTable" element={<Muitable />} />
          <Route path="/Products" element={<Cartcontainer />} />
          <Route path="/Charts" element={<Charts />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
