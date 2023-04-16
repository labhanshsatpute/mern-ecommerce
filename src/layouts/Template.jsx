import React from "react";
import { Outlet } from "react-router-dom";
import DesktopHeader from "../common/DesktopHeader";
import MobileHeader from "../common/MobileHeader";
import Footer from "../common/Footer";

const Template = () => {
  return (
    <React.Fragment>
      <header>
        <DesktopHeader />
        <MobileHeader />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </React.Fragment>
  );
}

export default Template;