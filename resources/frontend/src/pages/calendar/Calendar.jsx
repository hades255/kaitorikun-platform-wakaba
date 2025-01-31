import React, { useState, useEffect, useRef, useCallback } from "react";
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
    FormControlLabel,
    Switch,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import CloseIcon from "@mui/icons-material/Close";
import { PanelContent, ToastNotification } from "../../components";
import api from "../../api";

const theme = createTheme();

// interface Event {
//   id: string;
//   title: string;
//   start: string;
//   end: string;
//   description?: string;
// }

const Calendar = () => {
    const classes = useStyles();
    const calendarRef = useRef(null);
    const [events, setEvents] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [weekends, setWeekends] = useState(false);
    const [currentEvent, setCurrentEvent] = useState({
        title: "",
        description: "",
        public: false,
    });

    useEffect(() => {
        fetchEvents();
    }, []);

    const fetchEvents = async () => {
        try {
            const response = await api.get(`/events`);
            setEvents(response.data);
        } catch (error) {
            console.log(error);
            ToastNotification(
                "error",
                error.response.data.error ||
                    "サーバーエラーです。後でもう一度お試しください"
            );
        }
    };

    const handleDateSelect = useCallback((selectInfo) => {
        setCurrentEvent({
            start: selectInfo.startStr,
            end: selectInfo.endStr,
            title: "",
            description: "",
            public: false,
        });
        setShowModal(true);
    }, []);

    const handleEventClick = useCallback((clickInfo) => {
        console.log(clickInfo.event)
        const event = clickInfo.event.toPlainObject();
        setCurrentEvent({
            ...event,
            ...event.extendedProps,
        });
        setShowModal(true);
    }, []);

    const handleSaveEvent = async (e) => {
        e.preventDefault();
        try {
            if (currentEvent.id) {
                await api.put(`/events/${currentEvent.id}`, currentEvent);
                ToastNotification("success", "イベントが正常に更新されました");
            } else {
                await api.post(`/events`, currentEvent);
                ToastNotification("success", "イベントが正常に作成されました");
            }
            setShowModal(false);
            fetchEvents();
        } catch (error) {
            console.log(error);
            ToastNotification(
                "error",
                error.response.data.error ||
                    "サーバーエラーです。後でもう一度お試しください"
            );
        }
    };

    const handleDeleteEvent = async () => {
        if (!currentEvent.id) return;
        try {
            await api.delete(`/events/${currentEvent.id}`);
            console.log("イベントは正常に削除されました");
            setShowModal(false);
            fetchEvents();
        } catch (error) {
            console.log(error);
            ToastNotification(
                "error",
                error.response.data.error ||
                    "サーバーエラーです。後でもう一度お試しください"
            );
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
                    />
                </Paper>
            </PanelContent>
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
                                    label="タイトル"
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
                                    label="説明"
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
                            <FormControlLabel
                                control={
                                    <Switch
                                        checked={
                                            currentEvent.public ? true : false
                                        }
                                        onChange={(e) =>
                                            setCurrentEvent({
                                                ...currentEvent,
                                                public: e.target.checked
                                                    ? 1
                                                    : 0,
                                            })
                                        }
                                    />
                                }
                                label="公開イベント"
                                sx={{ mb: 2 }}
                            />
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
                                        削除
                                    </Button>
                                )}
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                >
                                    保存
                                </Button>
                            </Box>
                        </Box>
                    </form>
                </Box>
            </Modal>
        </ThemeProvider>
    );
};

export default Calendar;

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
