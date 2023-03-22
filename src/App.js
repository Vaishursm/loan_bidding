import React from "react";
import { Route, Routes } from "react-router-dom";
import AppHeader from "./components/AppHeader";
import Login from "./components/LoginPage/login";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/loandetails" element={<AppHeader />} />
      </Routes>
    </>
  );
}

export default App;
