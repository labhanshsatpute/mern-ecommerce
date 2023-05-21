import React, { useEffect, useRef, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "../styles/style.css";
import Template from "../layouts/Template";
import Home from "../views/Home";
import Dashboard from "../layouts/Dashboard";
import AccountInformation from "../views/dashboard/AccountInformation";
import LoadingBar from "react-top-loading-bar";

const App = () => {

  const ref = useRef(null);

  const [progress,setProgress] = useState(0);

  const location = useLocation();

  useEffect(() => {
    setProgress(40);
    setTimeout(() => {
      setProgress(100);
    }, 100);
  },[location.pathname]);

  return (
    <React.Fragment>
      <LoadingBar height={5} loaderSpeed={800} waitingTime={600} color="#8338ec" progress={progress} onLoaderFinished={() => setProgress(0)} />

      <Routes>
        <Route path="/" element={<Template/>}>
          <Route index={true} element={<Home/>} />

          <Route path="/dashboard" element={<Dashboard/>}>
            <Route index={true} element={<AccountInformation/>} />
          </Route>

        </Route>
      </Routes>
    </React.Fragment>
  );
}

export default App;