import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import LeftPanel from "../leftPanel/LeftPanel";
import RightPanel from "../rightPanel/RightPanel";

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
