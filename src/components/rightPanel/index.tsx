import React from "react";
import { useSelector } from "react-redux";
import EventDetail from "./eventDetail/EventDetail";
import { RootStore } from "../../store/store";
import "./rightPanel.scss";

const RightPanel = () => {
  const eventDetail = useSelector((state: RootStore) => state.eventsDetail);

  const test = {
    name : "hehe",
    age: 111,
  }
  
  return (
    <div className="right">
      {eventDetail.eventDetail && (
        <EventDetail props={eventDetail.eventDetail} {...test}/>
      )}
    </div>
  );
};

export default RightPanel;
