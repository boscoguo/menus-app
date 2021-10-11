import React, { useContext } from "react";
import { AppContext } from "../../context/contextManager";
import RouterComponent from "../../routers/RouterComponent";
import "./rightPanel.scss";

const RightPanel = () => {
  const { urlPathName } = useContext(AppContext);

  return (
    <div
      className={
        urlPathName && urlPathName === "login" ? "full-screen" : "right"
      }
      data-testid="right-panel"
    >
      <RouterComponent />
    </div>
  );
};

export default RightPanel;
