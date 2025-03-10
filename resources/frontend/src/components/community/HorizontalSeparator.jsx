import React, { useCallback, useEffect, useState } from "react";
import { Box } from "@mui/material";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const HorizontalSeparator = ({ children, BottomComponent, divider }) => {
    const [splitPosition, setSplitPosition] = useState(70);
    const [isDragging, setIsDragging] = useState(false);

    const handleMouseDown = useCallback(() => {
        setIsDragging(true);
    }, []);

    const handleMouseMove = useCallback(
        (e) => {
            if (isDragging) {
                const container = document.getElementById("split-container");
                if (container) {
                    const containerRect = container.getBoundingClientRect();
                    const percentage =
                        ((e.clientY - containerRect.top) /
                            containerRect.height) *
                        100;
                    setSplitPosition(Math.min(Math.max(percentage, 0), 100));
                }
            }
        },
        [isDragging]
    );

    const handleMouseUp = useCallback(() => {
        setIsDragging(false);
    }, []);

    useEffect(() => {
        if (isDragging) {
            window.addEventListener("mousemove", handleMouseMove);
            window.addEventListener("mouseup", handleMouseUp);
        }

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", handleMouseUp);
        };
    }, [isDragging, handleMouseMove, handleMouseUp]);

    const handleClickUp = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setSplitPosition(0);
    };

    const handleClickDown = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setSplitPosition(100);
    };

    return divider ? (
        <Box
            id="split-container"
            sx={{
                height: "calc(100vh - 210px)",
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
            }}
        >
            <Box
                sx={{
                    height: `${splitPosition}%`,
                    overflow: "auto",
                    transition: isDragging ? "none" : "height 0.1s ease",
                    borderRadius: 0,
                }}
                className="non-scrollbar"
            >
                {children}
            </Box>

            <Box
                onMouseDown={handleMouseDown}
                sx={{
                    display: "flex",
                    flexDirection:
                        splitPosition < 90 ? "column" : "column-reverse",
                }}
            >
                <Box
                    sx={{
                        height: 4,
                        bgcolor: "rgb(194,180,161)",
                        cursor: "row-resize",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        "&:hover": {
                            bgcolor: "lightgray",
                        },
                        borderRadius: 1,
                        transition: "background-color 0.2s ease",
                    }}
                ></Box>
                <Box display={"flex"} justifyContent={"center"}>
                    <Box
                        sx={{
                            height: 12,
                            bgcolor: "rgb(194,180,161)",
                            width: 80,
                            maxWidth: 80,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            "&:hover": {
                                bgcolor: "lightgray",
                            },
                            borderBottomLeftRadius: 1,
                            borderBottomRightRadius: 1,
                            transition: "background-color 0.2s ease",
                        }}
                    >
                        <Box
                            color={"white"}
                            sx={{ cursor: "pointer" }}
                            onClick={handleClickUp}
                        >
                            <ArrowDropUpIcon fontSize="large" />
                        </Box>
                        <Box
                            color={"white"}
                            sx={{ cursor: "pointer" }}
                            onClick={handleClickDown}
                        >
                            <ArrowDropDownIcon fontSize="large" />
                        </Box>
                    </Box>
                </Box>
            </Box>

            <Box
                sx={{
                    height: `${100 - splitPosition}%`,
                    overflow: "auto",
                    transition: isDragging ? "none" : "height 0.1s ease",
                    borderRadius: 0,
                }}
                className="non-scrollbar"
            >
                {BottomComponent}
            </Box>
        </Box>
    ) : (
        <>{children}</>
    );
};

export default HorizontalSeparator;
