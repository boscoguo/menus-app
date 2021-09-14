import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getEvent } from "../../action/eventsAction";
import CardsContainer from "./cardsContainer";
import data from "../../data/menuLists.json";
import BottomPart from "./bottomPart";
import Menu from "./menu";
import "./leftPanel.scss";

const LeftPanel = () => {

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getEvent(0));
  // },[])
  
  return (
    <div className="left">
      {/* <CardsContainer data={data} /> */}
      {/* <BottomPart /> */}
      <Menu data={data}/>
    </div>
  );
};
export default LeftPanel;
