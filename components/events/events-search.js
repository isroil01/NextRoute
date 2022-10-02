import React, { useRef } from "react";
import Button from "../ui/Button";
import classes from "./event-search.module.css";

const EventSearch = (props) => {
  const yearRef = useRef();
  const monthRef = useRef();
  const submitHandeler = (e) => {
    e.preventDefault();

    const selectYear = yearRef.current.value;
    const selecrMonth = monthRef.current.value;

    props.onSearch(selectYear,selecrMonth);
  };
  return (
    <form onSubmit={submitHandeler} className={classes.form}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label className={classes.label} htmlFor="year">
            Year
          </label>
          <select ref={yearRef} className={classes.select} id="year">
            <option value={"2021"}>2021</option>
            <option value={"2022"}>2022</option>
          </select>
        </div>
      </div>
      <div className={classes.control}>
        <label className={classes.label} htmlFor="month">
          Month
        </label>
        <select ref={monthRef} className={classes.select} id="month">
          <option value={"1"}>January</option>
          <option value={"2"}>February</option>
          <option value={"3"}>March</option>
          <option value={"4"}>April</option>
          <option value={"5"}>May</option>
          <option value={"6"}>June</option>
          <option value={"7"}>July</option>
          <option value={"8"}>August</option>
          <option value={"9"}>September</option>
          <option value={"10"}>October</option>
          <option value={"11"}>November</option>
          <option value={"12"}>December</option>
        </select>
      </div>
      <Button>Find Events</Button>
    </form>
  );
};

export default EventSearch;
