import React from 'react';
import { Outlet } from 'react-router-dom';
import "./App.css";
import './index.css'

function App() {
  return (
    <>
      <Outlet />
    </>
  );
}

export default App;