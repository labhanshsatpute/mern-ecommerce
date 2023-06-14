import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import "../styles/style.css";

import Template from "../layouts/Template";

import Home from "../views/Home";
import Dashboard from "../views/dashboard/Dashboard";
import OrderList from "../views/dashboard/OrderList";
import OrderDetails from "../views/dashboard/OrderDetails";
import AddressBook from "../views/dashboard/AddressBook";
import Login from "../views/auth/Login";

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

          <Route path="/login" element={<Login/>} />

          {/* Dashboard Routes */}
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/orders" element={<OrderList/>} />
            <Route path="/order/details/:id" element={<OrderDetails/>} />
            <Route path="/address-book" element={<AddressBook/>} />
            {/* <Route path="/address-edit/:id" element={</>} /> */}

        </Route>
      </Routes>
    </React.Fragment>
  );
}

export default App;