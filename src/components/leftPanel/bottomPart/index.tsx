import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getEvent } from "../../../action/eventsAction";
import { RootStore } from "../../../store/store";
import "./bottomPart.scss";
import { arrowLeft, arrowRight } from "../../../assests/images";

const BottomPart = () => {
  let num: number;
  const dispatch = useDispatch();
  const bottomState = useSelector(
    (state: RootStore) => state.events.event?.data.page
  );
  let [page, setPage] = useState(bottomState ? bottomState.number : 0)

  const handleLeft = () => {
    if (page && page > 0) {
      page--;
      num = page;
      setPage(num);
      dispatch(getEvent(num));
    }
  };
  const handleRight = () => {
    if (bottomState && page <= Number(bottomState.totalPages) / 20) {
      page++;
      num = page;
      setPage(num);
      dispatch(getEvent(num));
    }
  };
  return (
    <>
      {bottomState ? (
        <div className="bottom">
          <div className="bottom__left" onClick={handleLeft}>
            <img src={arrowLeft} alt="arrow loss" />
          </div>
          <div className="bottom__center">
            <p>page {page}</p>
            {bottomState && <p>{bottomState.totalPages} results</p>}
          </div>
          <div className="bottom__right" onClick={handleRight}>
            <img src={arrowRight} alt="arrow loss" />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default BottomPart;
