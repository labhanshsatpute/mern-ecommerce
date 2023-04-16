import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Template from "../layouts/Template";
import Home from "../pages/Home";

const App = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Template/>}>
          <Route index={true} element={<Home/>} />
        </Route>
      </Routes>
    </React.Fragment>
  );
}

export default App;