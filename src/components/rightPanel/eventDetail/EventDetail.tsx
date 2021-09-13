import React from "react";
import { getSuitableSizeImg } from "../../../utils/imgSizeUtils";
import "./eventDetail.scss";

interface EventDetailProps {
  props: any;
}
const EventDetail = ({ props }: EventDetailProps) => {
  const { data } = props;
  const { name, images, dates, info } = data;
  const { start } = dates;
  const { localDate, localTime } = start;

  console.log("props", props);

  return (
    <div className="detail" data-testid="detail-test">
      <div className="detail__left">
        <h1>{name}</h1>
        <p>
          <strong>Date: </strong>
          {localDate}
        </p>
        <p>
          <strong>Time: </strong>
          {localTime}
        </p>
        <p>
          <strong>Information: </strong>
          {info}
        </p>
      </div>
      <div className="detail__right">
        <img src={getSuitableSizeImg(images)} alt="logo" />
      </div>
    </div>
  );
};

export default EventDetail;
