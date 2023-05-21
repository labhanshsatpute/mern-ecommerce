import React from "react";
import { Route, Routes } from "react-router-dom";
import "../styles/style.css";
import Template from "../layouts/Template";
import Home from "../views/Home";

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