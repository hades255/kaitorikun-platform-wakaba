import React, { useState, useEffect } from "react";
import { v4 } from "uuid";
import { addMonths, endOfWeek, startOfWeek, subMonths } from "date-fns";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { getDaysInMonth } from "date-fns";
import clsx from "clsx";

export const WeekPicker = ({ onChange }) => {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(new Date());
  const [week, setWeek] = useState({
    firstDay: startOfWeek(new Date(), { weekStartsOn: 1 }),
    lastDay: endOfWeek(new Date(), { weekStartsOn: 1 }),
  });
  const classes = useStyles();
  useEffect(() => {
    onChange && onChange(week.firstDay);
  }, [week]);

  const isLeapYear = () => {
    let leapYear = new Date(new Date().getFullYear(), 1, 29);
    return leapYear.getDate() == 29;
  };

  const convertDate = (date) => {
    let dt = new Date(date);

    return `${dt.getFullYear()}年 ${dt.getMonth() + 1}月 ${dt.getDate()}日`
  };

  const handleClick = (e) => {
    let localDate;
    if (e.target.id.includes("prev")) {
      localDate = new Date(date.setDate(1));
      setDate(new Date(date.setDate(1)));
    } else if (e.target.id.includes("next")) {
      localDate = new Date(date.setDate(getDaysInMonth(date)));
      setDate(new Date(date.setDate(getDaysInMonth(date))));
    } else {
      localDate = new Date(date.setDate(e.target.id));
      setDate(new Date(date.setDate(e.target.id)));
    }
    const firstDay = startOfWeek(localDate, { weekStartsOn: 1 });
    const lastDay = endOfWeek(localDate, { weekStartsOn: 1 });
    setWeek({ firstDay, lastDay });
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
        new Date(week.firstDay).getTime() <=
        new Date(currentDate).getTime() &&
        new Date(currentDate).getTime() <=
        new Date(week.lastDay).getTime()
      ) {
        cName = clsx(cName, classes.selectedWeek);
      }

      ar.push(
        <div key={v4()} id={i} className={cName} onClick={handleClick}>
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
      let currentTime = new Date(currentDate).getTime();
      let firstTime = new Date(week.firstDay).getTime();
      let endTime = new Date(week.lastDay).getTime();
      if (currentTime >= firstTime && currentTime <= endTime) {
        // cName = "single-number selected-week";
        cName = clsx(classes.singleNumber, classes.selectedWeek);
      }

      prevMonth.push(
        <div
          onClick={handleClick}
          key={v4()}
          id={"prev-" + i}
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
      let cName = clsx(classes.singleNumber, classes.otherMonth);
      const lastDay = week.lastDay.getTime();
      const lastDayOfMonth = new Date(
        new Date(date).setDate(getDaysInMonth(date))
      );

      if (
        lastDayOfMonth.getTime() <= lastDay &&
        week.firstDay.getMonth() == lastDayOfMonth.getMonth()
      ) {
        cName = clsx(classes.singleNumber, classes.selectedWeek);
      }

      nextMonth.push(
        <div
          onClick={handleClick}
          key={v4()}
          id={"next-" + i}
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
      <Typography>
        {convertDate(week.firstDay)} - {convertDate(week.lastDay)}
      </Typography>
      {open && (
        <div className={classes.weekOptions}>
          <div className={classes.title}>
            <div
              onClick={() => handleDate()}
              className={classes.arrowButton}
            >
              <ArrowBackIosNewIcon color="primary" />
            </div>
            {`${(date.getMonth() + 1).toString() + "月"} ${date.getFullYear()}.`}
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
