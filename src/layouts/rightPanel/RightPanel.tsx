import React, {useContext} from "react";
import { AppContext } from "../../context/contextManager";
import RouterComponent from "../../components/router/RouterComponent";
import "./rightPanel.scss";

const RightPanel = () => {
  const { btnValue} = useContext(AppContext);

  return (
    <div className={btnValue && btnValue === "login" ? "full-screen" : "right" } data-testid="right-panel">
      <RouterComponent />
    </div>
  );
};

export default RightPanel;
