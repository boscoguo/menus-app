import React, { useContext } from "react";
import Menu from "../menu";
import { BtnContext } from "../../context/contextManager";
import "./leftPanel.scss";

const LeftPanel = () => {
  const {btnValue} = useContext(BtnContext);

  return (
    <div className={btnValue && btnValue === "login" ? "close transition" : "left transition"} data-testid = "left-panel">
      <Menu />
    </div>
  );
};
export default LeftPanel;
