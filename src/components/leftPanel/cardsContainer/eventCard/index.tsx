import React from "react";
import "./eventCard.scss";
import Arrow from "./Arrow";

interface EventCardProps {
    name: string;
    localDate: string;
    venues: string;
    id: string;
    index: number;
    card: any[];
}
const EventCard = ({ name, localDate, venues, id, index, card }: EventCardProps) => {
    return (
        <div className={card && card[index].isActive ? "event-card active" : "event-card"}>
            <div className="event-card__left">
                <p className={card && card[index].isActive ? "event-card__left-title title-active" : "event-card__left-title"}>{name}</p>
            </div>
            <div className="event-card__middle">
                <p className="evnet-card__middle-year">{localDate}</p>
                <p>{venues}</p>
            </div>
            <div className="event-card__right">
                <Arrow color={card && card[index].isActive ? "#ffffff" : "#013B81"} />
            </div>
        </div>
    );
};

export default EventCard;
