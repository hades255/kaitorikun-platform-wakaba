import React, { useState } from 'react';
import { Box, Paper, createTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { ThemeProvider } from "@mui/material";
import {
    PanelContent,
    CalendarGrid,
    CalendarHeader,
} from "../../components";

const theme = createTheme();

const CalendarPage = () => {
    const classes = useStyles();
    const [currentDate, setCurrentDate] = useState(new Date());
    const [view, setView] = useState('week');
    console.log(currentDate);
    return (
        <ThemeProvider theme={theme}>
            <PanelContent 
                headerContent
                title="カレンダー"
            >
                <Paper className={classes.root}>
                    <CalendarHeader
                        currentDate={currentDate}
                        view={view}
                        onViewChange={setView}
                        onDateChange={setCurrentDate}
                    />
                    <Box className={classes.gridContainer}>
                        <CalendarGrid currentDate={currentDate} view={view} />
                    </Box>
                </Paper>
            </PanelContent>
      </ThemeProvider>
    );
};

export default CalendarPage;

const useStyles = makeStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      height: `calc(100vh - 200px)`,
      overflow: 'auto'
    },
    gridContainer: {
      flex: 1,
      overflow: 'hidden'
    }
});