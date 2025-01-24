import React from 'react';
import { format } from 'date-fns';
import { Box, Button, IconButton, MenuItem, Select, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { WeekPicker } from './week-picker';

export const CalendarHeader = ({
  currentDate,
  view,
  onViewChange,
  onDateChange,
}) => {
  const classes = useStyles();

  const navigateDate = (direction) => {
    const newDate = new Date(currentDate);
    if (view === 'day') {
      newDate.setDate(currentDate.getDate() + (direction === 'next' ? 1 : -1));
    } else {
      newDate.setDate(currentDate.getDate() + (direction === 'next' ? 7 : -7));
    }
    onDateChange(newDate);
  };

  return (
    <Box className={classes.headerContainer}>
      <Box className={classes.leftSection}>
        <Button
          variant="outlined"
          onClick={() => onDateChange(new Date())}
          size="small"
        >
          Today
        </Button>
        <Box className={classes.navigationButtons}>
          <IconButton onClick={() => navigateDate('prev')} size="small">
            <ArrowBackIosNewIcon />
          </IconButton>
          <IconButton onClick={() => navigateDate('next')} size="small">
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>
        <Typography variant="h6">
          {format(currentDate, 'MMMM yyyy')}
        </Typography>
        <WeekPicker />
      </Box>
      <Select
        size="small"
        value={view}
        onChange={(e) => onViewChange(e.target.value)}
        className={classes.viewSelect}
      >
        <MenuItem value="day">Day</MenuItem>
        <MenuItem value="workWeek">Work Week</MenuItem>
        <MenuItem value="week">Week</MenuItem>
      </Select>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  headerContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.spacing(2),
    borderBottom: `1px solid #eee`,
    backgroundColor: theme.palette.background.paper
  },
  leftSection: {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(2)
  },
  navigationButtons: {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1)
  },
  viewSelect: {
    minWidth: 120
  }
}));