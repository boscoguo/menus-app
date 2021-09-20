import React, { useContext } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import LeftPanel from "../leftPanel";
import RightPanel from "../rightPanel";

import "./container.scss";

const Container = () => {

  return (
    <div className="containter">
        <Router>
          <LeftPanel />
          <RightPanel />
        </Router>
    </div>
  );
};

export default Container;
