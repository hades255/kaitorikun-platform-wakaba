import React from 'react';
import {
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  format,
  isToday,
  startOfDay,
  addHours,
  isSameHour,
} from 'date-fns';
import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const HOURS = Array.from({ length: 24 }, (_, i) => i);

export const CalendarGrid = ({ currentDate, view }) => {
  const classes = useStyles();

  const getDaysToShow = () => {
    if (view === 'day') return [currentDate];
    const start = startOfWeek(currentDate, { weekStartsOn: 1 });
    const end = endOfWeek(currentDate, { weekStartsOn: 1 });
    let days = eachDayOfInterval({ start, end });
    if (view === 'workWeek') {
      days = days.slice(0, 5);
    }
    return days;
  };

  const days = getDaysToShow();

  return (
    <Box className={classes.gridContainer}>
      <Box className={classes.daysHeader}>
        <Box className={classes.timeColumn} />
        {days.map((day) => (
          <Box
            key={day.toISOString()}
            className={isToday(day) ? classes.todayCell : classes.dayCell}
          >
            <Typography variant="subtitle2">{format(day, 'EEE')}</Typography>
            <Typography variant="h6">{format(day, 'd')}</Typography>
          </Box>
        ))}
      </Box>

      <Box className={classes.scrollContainer}>
        <Box className={classes.timeColumnContainer}>
          {HOURS.map((hour) => (
            <Box key={hour} className={classes.timeSlot}>
              <Typography variant="caption" color="text.secondary">
                {format(addHours(startOfDay(new Date()), hour), 'ha')}
              </Typography>
            </Box>
          ))}
        </Box>

        {days.map((day) => (
          <Box key={day.toISOString()} className={classes.dayColumn}>
            {HOURS.map((hour) => {
              const currentHour = addHours(startOfDay(day), hour);
              return (
                <Box
                  key={hour}
                  className={
                    isSameHour(new Date(), currentHour)
                      ? classes.currentHourCell
                      : classes.hourCell
                  }
                />
              );
            })}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%'
  },
  daysHeader: {
    display: 'flex',
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  timeColumn: {
    width: 80,
    borderRight: `1px solid ${theme.palette.divider}`,
    backgroundColor: theme.palette.grey[50]
  },
  dayCell: {
    flex: 1,
    padding: theme.spacing(1),
    textAlign: 'center',
    backgroundColor: theme.palette.grey[50]
  },
  todayCell: {
    flex: 1,
    padding: theme.spacing(1),
    textAlign: 'center',
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.contrastText
  },
  timeSlot: {
    height: 80,
    borderBottom: `1px solid ${theme.palette.divider}`,
    borderRight: `1px solid ${theme.palette.divider}`,
    padding: theme.spacing(1),
    textAlign: 'right'
  },
  hourCell: {
    height: 80,
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  currentHourCell: {
    height: 80,
    borderBottom: `1px solid ${theme.palette.divider}`,
    backgroundColor: theme.palette.primary.light
  },
  scrollContainer: {
    display: 'flex',
    flex: 1,
    overflow: 'auto'
  },
  timeColumnContainer: {
    width: 80,
    flexShrink: 0
  },
  dayColumn: {
    flex: 1
  }
}));
