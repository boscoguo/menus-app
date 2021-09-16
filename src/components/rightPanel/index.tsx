import React, {useContext} from "react";
import { BtnContext } from "../../context/contextManager";
import RouterAll from "../router";
import "./rightPanel.scss";

const RightPanel = () => {
  const { btnValue} = useContext(BtnContext);

  return (
    <div className={btnValue === "login" ? "full-screen" : "right" }>
      <RouterAll />
    </div>
  );
};

export default RightPanel;
