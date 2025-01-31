import React, { useState, useEffect, useRef, useCallback } from "react";
import axios from "axios";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import {
    Box,
    Paper,
    createTheme,
    Modal,
    Button,
    Typography,
    TextField,
    ThemeProvider,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import CloseIcon from "@mui/icons-material/Close";
import { PanelContent } from "../../components";
import { DatePicker } from "../../components/calendar/DatePicker";

const theme = createTheme();

const API_URL = "http://localhost:3000/api";

// interface Event {
//   id: string;
//   title: string;
//   start: string;
//   end: string;
//   description?: string;
// }

function App() {
    const classes = useStyles();
    const calendarRef = useRef(null);
    const [events, setEvents] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [weekends, setWeekends] = useState(false);
    const [currentEvent, setCurrentEvent] = useState({});
    const [pickerVisible, setPickerVisible] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [title, setTitle] = useState("");

    useEffect(() => {
        fetchEvents();
    }, []);

    const fetchEvents = async () => {
        try {
            const response = await axios.get(`${API_URL}/events`);
            setEvents(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const formatDateInJapanese = (date, weekday) => {
        const options = {
            year: "numeric",
            month: "long",
            day: "numeric",
        };
        if (weekday) options.weekday = "long";
        return new Intl.DateTimeFormat("ja-JP", options).format(date);
    };

    const handleDatesSet = (dateInfo) => {
        //  dayGridMonth,timeGridWeek,timeGridDay
        if (dateInfo.view.type === "timeGridDay")
            setTitle(formatDateInJapanese(dateInfo.start, true));
        else
            setTitle(
                `${formatDateInJapanese(
                    dateInfo.start
                )} - ${formatDateInJapanese(dateInfo.end)}`
            );
    };

    const handleDatePickerClick = useCallback(() => {
        setPickerVisible(!pickerVisible);
    }, [pickerVisible]);

    const handleDateChange = useCallback(
        (date) => {
            setSelectedDate(date);
            const calendarApi = calendarRef.current.getApi();
            calendarApi.gotoDate(date);
            setPickerVisible(false);
        },
        [calendarRef]
    );

    const handleViewChange = useCallback((view) => {}, []);

    const handleDateSelect = useCallback((selectInfo) => {
        setCurrentEvent({
            start: selectInfo.startStr,
            end: selectInfo.endStr,
        });
        setShowModal(true);
    }, []);

    const handleEventClick = useCallback((clickInfo) => {
        setCurrentEvent(clickInfo.event.toPlainObject());
        setShowModal(true);
    }, []);

    const handleSaveEvent = async (e) => {
        e.preventDefault();
        try {
            if (currentEvent.id) {
                await axios.put(
                    `${API_URL}/events/${currentEvent.id}`,
                    currentEvent
                );
                console.log("Event updated successfully");
            } else {
                await axios.post(`${API_URL}/events`, currentEvent);
                console.log("Event created successfully");
            }
            setShowModal(false);
            fetchEvents();
        } catch (error) {
            console.log(error);
        }
    };

    const handleDeleteEvent = async () => {
        if (!currentEvent.id) return;
        try {
            await axios.delete(`${API_URL}/events/${currentEvent.id}`);
            console.log("Event deleted successfully");
            setShowModal(false);
            fetchEvents();
        } catch (error) {
            console.log(error);
        }
    };

    const handleClose = useCallback(() => {
        setShowModal(false);
    }, []);

    const handleClickShowWorkday = useCallback(() => {
        setWeekends(!weekends);
    }, [weekends]);

    return (
        <ThemeProvider theme={theme}>
            <PanelContent headerContent title="カレンダー">
                <Paper className={classes.root}>
                    <FullCalendar
                        ref={calendarRef}
                        locale="ja"
                        plugins={[
                            dayGridPlugin,
                            timeGridPlugin,
                            interactionPlugin,
                        ]}
                        headerToolbar={{
                            left: "prev,next today",
                            center: "title",
                            right: "workdaysButton dayGridMonth,timeGridWeek,timeGridDay",
                        }}
                        customButtons={{
                            workdaysButton: {
                                text: `${weekends ? "非表示" : "表示"} 営業日`,
                                title: "就業日の表示を切り替える",
                                click: handleClickShowWorkday,
                            },
                            datePicker: {
                                text: title,
                                click: handleDatePickerClick,
                                title: "日付ピッカーを開く",
                            },
                        }}
                        buttonText={{
                            dayGridMonth: "月",
                            timeGridWeek: "週",
                            timeGridDay: "日",
                            today: "今日",
                        }}
                        initialView="timeGridWeek"
                        editable={true}
                        selectable={true}
                        selectMirror={true}
                        dayMaxEvents={true}
                        weekends={weekends}
                        events={events}
                        height="calc(100vh - 200px)"
                        select={handleDateSelect}
                        eventClick={handleEventClick}
                        viewDidMount={handleViewChange}
                        datesSet={handleDatesSet}
                    />
                </Paper>
            </PanelContent>
            <Modal
                open={pickerVisible}
                onClose={() => {
                    setPickerVisible(false);
                }}
                aria-labelledby="datepicker-modal"
                aria-describedby="datepicker-modal in calendar"
            >
                <Box className={classes.modal}>
                    <DatePicker
                        onChange={handleDateChange}
                        selectedDate={selectedDate}
                    />
                </Box>
            </Modal>
            <Modal
                open={showModal}
                onClose={handleClose}
                aria-labelledby="event-modal"
                aria-describedby="event-modal in calendar"
            >
                <Box className={classes.modal}>
                    <Box className={classes.modalHeader}>
                        <Typography
                            id="modal-title"
                            variant="h6"
                            component="h2"
                        >
                            {currentEvent.id ? "Edit Event" : "New Event"}
                        </Typography>
                        <Button
                            onClick={handleClose}
                            sx={{ px: 0, minWidth: 32 }}
                        >
                            <CloseIcon />
                        </Button>
                    </Box>
                    <form onSubmit={handleSaveEvent}>
                        <Box className={classes.modelForm}>
                            <Box>
                                <TextField
                                    label="Title"
                                    variant="outlined"
                                    fullWidth
                                    value={currentEvent.title || ""}
                                    onChange={(e) =>
                                        setCurrentEvent({
                                            ...currentEvent,
                                            title: e.target.value,
                                        })
                                    }
                                    required
                                />
                            </Box>

                            <Box>
                                <TextField
                                    label="Description"
                                    variant="outlined"
                                    fullWidth
                                    multiline
                                    rows={3}
                                    value={currentEvent.description || ""}
                                    onChange={(e) =>
                                        setCurrentEvent({
                                            ...currentEvent,
                                            description: e.target.value,
                                        })
                                    }
                                />
                            </Box>

                            <Box
                                display="flex"
                                justifyContent="flex-end"
                                gap={2}
                            >
                                {currentEvent.id && (
                                    <Button
                                        variant="contained"
                                        color="error"
                                        onClick={handleDeleteEvent}
                                    >
                                        Delete
                                    </Button>
                                )}
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                >
                                    Save
                                </Button>
                            </Box>
                        </Box>
                    </form>
                </Box>
            </Modal>
        </ThemeProvider>
    );
}

export default App;

const useStyles = makeStyles({
    root: {
        display: "flex",
        flexDirection: "column",
        height: `calc(100vh - 200px)`,
        overflow: "auto",
    },
    gridContainer: {
        flex: 1,
        overflow: "hidden",
    },
    modal: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 400,
        backgroundColor: "#F4F6F9",
        border: "none",
        borderRadius: "8px",
        boxShadow: "4px 8px 8px #0004",
        padding: 16,
    },
    modalHeader: {
        display: "flex",
        justifyContent: "space-between",
    },
    modelForm: {
        display: "flex",
        flexDirection: "column",
        gap: 16,
    },
});
