import React, {useContext} from "react";
import { BtnContext } from "../../context/contextManager";
import RouterAll from "../router";
import "./rightPanel.scss";

const RightPanel = () => {
  const { isCancel } = useContext(BtnContext);

  return (
    <div className={isCancel ? "right" : "full-screen" }>
      <RouterAll />
    </div>
  );
};

export default RightPanel;
