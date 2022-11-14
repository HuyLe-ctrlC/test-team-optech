import React from "react";
import { SideBar } from "../SideBar/SideBar";
import { Topbar } from "../Topbar/Topbar";
import { Form } from "../Form/Form";
export const TablePage = () => {
  return (
    <div>
      {" "}
      <div id="wrapper">
        {" "}
        <SideBar />
        <div id="content-wrapper">
          <Topbar />
          <div id="content">
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};
