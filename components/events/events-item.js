import DateIcon from "../icons/date-icon";
import React from "react";
import Button from "../ui/Button";
import style from "./event-item.module.css";
import AddressIcon from "../icons/address-icon";
import ArrovRightIcon from '../icons/arrow-right-icon';

const EventItem = (props) => {
  const { title, image, date, location, id } = props;

  const readableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formattedadress = location.replace(", ", "\n");

  const exploreLink = ` /events/${id}`;

  return (
    <li className={style.item}>
      <img className={style.img} src={"/" + image} alt="" />
      <div className={style.content}>
        <div className={style.summary}>
          <h2>{title}</h2>
          <div className={style.date}>
            <DateIcon />
            <time>{readableDate}</time>
          </div>
          <div className={style.address}>
            <AddressIcon />
            <address>{formattedadress}</address>
          </div>
        </div>
        <div className={style.actions}>
          <Button link={exploreLink}>
            <span>Explore Event</span>
            <span className={style.icon}>
              <ArrovRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
