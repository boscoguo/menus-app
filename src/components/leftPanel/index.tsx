import React from "react";
import data from "../../data/menuLists.json";
import Menu from "./menu";
import "./leftPanel.scss";

interface LeftPanelProps {
  btnValue: string
}

const LeftPanel = ({ btnValue }: LeftPanelProps) => {

  return (
    <div className={btnValue && btnValue === "login" ? "close transition" : "left transition"}>
      <Menu data={data} />
    </div>
  );
};
export default LeftPanel;
