import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import LeftPanel from "../leftPanel";
import RightPanel from "../rightPanel";
import { BtnContext } from "../../context/contextManager";
import "./container.scss";

const Container = () => {
  const pathName = window.location.pathname;
  const [btnValue, setBtnValue] = useState(pathName.replace("/", ""));
  const [isCancel, setIsCancel] = useState(false);
  
  return (
    <div className={"containter"} data-testid="container-test">
      <Router>
        <BtnContext.Provider value={{setBtnValue, setIsCancel, isCancel}}>
          <LeftPanel btnValue={btnValue} isCancel={isCancel}/>
          <RightPanel />
        </BtnContext.Provider>
      </Router>
    </div>
  );
};

export default Container;
