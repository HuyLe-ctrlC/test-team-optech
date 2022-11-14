import React from "react";
import { Outlet } from "react-router-dom";

import { SideBar } from "../SideBar/SideBar";
import { Navigation } from "../Navigation/Navigation";
export const HomePage = () => {
  return (
    <div>
      <div id="wrapper">
        {" "}
        <SideBar />
        <div id="content-wrapper">
          <Navigation />
          <div id="content">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};
