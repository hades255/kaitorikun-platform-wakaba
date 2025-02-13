import React, { useState, useEffect } from "react";
import { v4 } from "uuid";
import { addMonths, subMonths } from "date-fns";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";

export const DatePicker = ({ onChange }) => {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const classes = useStyles();
  useEffect(() => {
    onChange && onChange(selectedDate);
  }, [selectedDate]);

  const isLeapYear = () => {
    let leapYear = new Date(new Date().getFullYear(), 1, 29);
    return leapYear.getDate() == 29;
  };

  const convertDate = (date) => {
    let dt = new Date(date);

    return `${dt.getFullYear()}年 ${dt.getMonth() + 1}月 ${dt.getDate()}日`
  };

  const handleClick = (e) => {
    const target = e.target;
    let newDate;
    if (target.id.includes("prev")) {
      const prevMonth = new Date(date).setMonth(date.getMonth() - 1);
      const day = parseInt(target.id.split("-")[1]);
      newDate = new Date(new Date(prevMonth).setDate(day));
    } else if (target.id.includes("next")) {
      const nextMonth = new Date(date).setMonth(date.getMonth() + 1);
      const day = parseInt(target.id.split("-")[1]);
      newDate = new Date(new Date(nextMonth).setDate(day));
    } else {
      newDate = new Date(date.setDate(parseInt(target.id)));
    }
    setSelectedDate(new Date(newDate));
    setOpen(false);
  };

  const days = {
    1: 31,
    2: isLeapYear() ? 29 : 28,
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31,
  };

  const renderDays = () => {
    let month = date.getMonth() + 1;
    let ar = [];
    for (let i = 1; i <= days[month]; i++) {
      let currentDate = new Date(date).setDate(i);

      let cName = classes.singleNumber;
      if (
        new Date(currentDate).toDateString() ===
        selectedDate.toDateString()
      ) {
        cName = clsx(cName, classes.selectedDate);
      }

      ar.push(
        <div
          key={v4()}
          id={i.toString()}
          className={cName}
          onClick={handleClick}
        >
          {i}
        </div>
      );
    }

    const displayDate = new Date(date).setDate(1);
    let dayInTheWeek = new Date(displayDate).getDay();
    if (dayInTheWeek < 1) {
      dayInTheWeek = 7;
    }
    let prevMonth = [];
    let prevMonthDays = new Date(date).getMonth();
    if (prevMonthDays === 0) {
      prevMonthDays = 12;
    }
    for (let i = dayInTheWeek; i > 1; i--) {
      let previousMonth = new Date(date).setMonth(
        new Date(date).getMonth() - 1
      );
      let currentDate = new Date(previousMonth).setDate(
        days[prevMonthDays] - i + 2
      );
      let cName = clsx(classes.singleNumber, classes.otherMonth);

      if (
        new Date(currentDate).toDateString() ===
        selectedDate.toDateString()
      ) {
        cName = clsx(cName, classes.selectedDate);
      }

      prevMonth.push(
        <div
          onClick={handleClick}
          key={v4()}
          id={`prev-${days[prevMonthDays] - i + 2}`}
          className={cName}
        >
          {days[prevMonthDays] - i + 2}
        </div>
      );
    }

    let nextMonth = [];
    let fullDays = 35;
    if ([...prevMonth, ...ar].length > 35) {
      fullDays = 42;
    }

    for (let i = 1; i <= fullDays - [...prevMonth, ...ar].length; i++) {
      let nextMonthDate = new Date(
        new Date(date).setMonth(date.getMonth() + 1)
      );
      nextMonthDate.setDate(i);

      let cName = clsx(classes.singleNumber, classes.otherMonth);

      if (nextMonthDate.toDateString() === selectedDate.toDateString()) {
        cName = clsx(cName, classes.selectedDate);
      }

      nextMonth.push(
        <div
          onClick={handleClick}
          key={v4()}
          id={`next-${i}`}
          className={cName}
        >
          {i}
        </div>
      );
    }
    return [...prevMonth, ...ar, ...nextMonth];
  };

  const handleDate = (next) => {
    let localDate = new Date(date);
    if (next) {
      localDate = addMonths(localDate, 1);
    } else {
      localDate = subMonths(localDate, 1);
    }
    setDate(new Date(localDate));
  };

  return (
    <Box
      className={classes.wrapper}
      onBlur={() => setOpen(false)}
      onClick={() => setOpen(true)}
      tabIndex={0}
    >
      <Typography>{convertDate(selectedDate)}</Typography>
      {open && (
        <div className={classes.weekOptions}>
          <div className={classes.title}>
            <div
              onClick={() => handleDate()}
              className={classes.arrowButton}
            >
              <ArrowBackIosNewIcon color="primary" />
            </div>
            {`${(date.getMonth() + 1)}月 ${date.getFullYear()}.`}
            <div
              onClick={() => handleDate(true)}
              className={classes.arrowButton}
            >
              <ArrowForwardIosIcon color="primary" />
            </div>
          </div>
          <div className={classes.numberContainer}>
            <div className={classes.day}>月</div>
            <div className={classes.day}>火</div>
            <div className={classes.day}>水</div>
            <div className={classes.day}>木</div>
            <div className={classes.day}>金</div>
            <div className={classes.day}>土</div>
            <div className={classes.day}>日</div>
          </div>
          <div className={classes.numberContainer}>
            {renderDays()}
          </div>
        </div>
      )}
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  wrapper: {
    width: "300px",
    height: "40px",
    color: "#454545",
    position: "relative",
    borderRadius: "8px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    border: "1px solid #c3c0cc",
    transition: "0.5s ease",
    padding: "0 1rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "1rem",
  },
  weekOptions: {
    padding: "0.4rem",
    position: "absolute",
    top: "105%",
    left: "50%",
    transform: "translateX(-50%)",
    width: "100%",
    borderRadius: "5px",
    border: "1px solid #c3c0cc",
    display: "flex",
    overflow: "hidden",
    background: "white",
    zIndex: 99,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    padding: "0.8rem",
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  arrowButton: {
    cursor: "pointer",
    width: "25px",
    height: "25px",
    transition: "0.2s ease-in",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
    "&:hover": {
      backgroundColor: "#ff9900",
      borderRadius: "15%",
    },
  },
  numberContainer: {
    borderTop: "1px solid gainsboro",
    width: "100%",
    padding: "0.3rem",
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr",
  },
  day: {
    width: "100%",
    aspectRatio: 1,
    fontSize: "0.8rem",
    background: "none",
    color: "black",
    display: "grid",
    placeItems: "center",
    background: "none",
    color: "black",
  },
  singleNumber: {
    width: "100%",
    aspectRatio: 1,
    fontSize: "0.8rem",
    background: "none",
    color: "black",
    display: "grid",
    placeItems: "center",
  },
  selectedWeek: {
    color: "white",
    backgroundColor: "#ff9900",
  },
  otherMonth: {
    background: "none",
    color: "#c3c0cc",
  },
}));
