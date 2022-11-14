import React from "react";

import { SideBar } from "../SideBar/SideBar";
import { Topbar } from "../Topbar/Topbar";
export const HomePage = () => {
  return (
    <div>
      <div id="wrapper">
        {" "}
        <SideBar />
        <div id="content-wrapper">
          <Topbar />
          <div id="content">homepage</div>
        </div>
      </div>
    </div>
  );
};
