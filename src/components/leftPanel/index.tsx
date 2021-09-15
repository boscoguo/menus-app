import React, { useState } from "react";
import data from "../../data/menuLists.json";
import Menu from "./menu";
import "./leftPanel.scss";

interface LeftPanelProps {
  btnValue: string,
  isCancel: boolean
}

const LeftPanel = ({ btnValue, isCancel }: LeftPanelProps) => {

  return (
    <div className={!isCancel && btnValue && btnValue === "login" ? "close transition" : "left transition"}>
      <Menu data={data} />
    </div>
  );
};
export default LeftPanel;
