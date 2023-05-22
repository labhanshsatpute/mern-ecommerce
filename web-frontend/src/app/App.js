import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import "../styles/style.css";

import Template from "../layouts/Template";
import Dashboard from "../layouts/Dashboard";

import Home from "../views/Home";
import AccountInformation from "../views/dashboard/AccountInformation";
import OrderList from "../views/dashboard/OrderList";
import OrderDetails from "../views/dashboard/OrderDetails";

const App = () => {

  const [progress,setProgress] = useState(0);

  const location = useLocation();

  useEffect(() => {
    window.scroll(0,0);
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

          {/* Dashboard Routes */}
          <Route element={<Dashboard/>}>
            <Route path="/dashboard" element={<AccountInformation/>} />
            <Route path="/orders" element={<OrderList/>} />
            <Route path="/order/details/:id" element={<OrderDetails/>} />
          </Route>

        </Route>
      </Routes>
    </React.Fragment>
  );
}

export default App;