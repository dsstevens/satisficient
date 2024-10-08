import React from "react";
import { Outlet } from "react-router-dom";
import "../src/styles/App.scss";

function App() {
  return (
    <>
      <Outlet />
    </>
  );
}

export default App;
