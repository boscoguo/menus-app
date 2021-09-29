import React, { useContext } from "react";
import { Menu } from "../../components";
import { AppContext } from "../../context/contextManager";
import "./leftPanel.scss";

const LeftPanel = () => {
  const { btnValue } = useContext(AppContext);
  
  return (
    <div className={btnValue && btnValue === "login" ? "close transition" : "left transition"} data-testid="left-panel">
      <Menu />
    </div>
  );
};
export default LeftPanel;
