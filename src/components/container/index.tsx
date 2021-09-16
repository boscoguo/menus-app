import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import LeftPanel from "../leftPanel";
import RightPanel from "../rightPanel";
import { BtnContext } from "../../context/contextManager";
import "./container.scss";

const Container = () => {
  const pathName = window.location.pathname;

  const [btnValue, setBtnValue] = useState(pathName.replace("/", ""));

  return (
    <div className={"containter"} data-testid="container-test">
      <Router>
        <BtnContext.Provider value={{ setBtnValue, btnValue }}>
          <LeftPanel btnValue={btnValue} />
          <RightPanel />
        </BtnContext.Provider>
      </Router>
    </div>
  );
};

export default Container;
