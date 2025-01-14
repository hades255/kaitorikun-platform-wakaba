import React, { useState, useEffect } from "react";
import moment from "moment";
import { weekdays } from "../../../feature/field";

export default function Clock() {
    const [currentTime, setCurrentTime] = useState("");

    useEffect(() => {
        const updateClock = () => {
            const now = moment();
            const fday = weekdays[now.format('d')];
            const fdate = now.format("YYYY/MM/DD")
            const ftime = now.format("HH:mm");
            const fullDateTime = `${fdate} (${fday}) ${ftime}`
            setCurrentTime(fullDateTime);
        };

        updateClock();

        const timer = setInterval(updateClock, 1000);

        // Cleanup interval on unmount
        return () => clearInterval(timer);
    }, [])

    return (
        <React.Fragment>
            <div className="live-clock">
                {currentTime}
            </div>
        </React.Fragment>
    )
}