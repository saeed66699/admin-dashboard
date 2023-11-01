import { useEffect, useState } from "react";

import "./App.css";
import { Muitable } from "./components/Muitable";

import Cartcontainer from "./components/Cartcontainer";
import Pnavbar from "./components/Pnavbar";
import { AdminDashboard } from "./components/AdminDashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  useEffect(() => {
    console.log("changescreen");
  }, []);
  return (
    <>
      <BrowserRouter>
        <Pnavbar />
        <Routes>
          <Route path="/Admin-Dashboard" element={<AdminDashboard />} />
          <Route path="/UserTable" element={<Muitable />} />
          <Route path="/Products" element={<Cartcontainer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
