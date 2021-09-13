import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import LeftPanel from "../leftPanel";
import RightPanel from "../rightPanel";
import "./container.scss";

const Container = () => {
  return (
    <div className="containter" data-testid="container-test">
      <Router>
        <LeftPanel />
        <RightPanel />
      </Router>
    </div>
  );
};

export default Container;
