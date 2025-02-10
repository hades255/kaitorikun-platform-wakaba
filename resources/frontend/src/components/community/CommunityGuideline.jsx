import React, { useCallback, useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";

const CommunityGuideline = ({ comData, setComData }) => {
    const [show, setShow] = useState(false);

    const handleClick = useCallback(() => setShow(!show), [show, setShow]);

    return (
        <>
            <Box
                mb={2}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"space-between"}
                gap={2}
            >
                {show ? (
                    <TextField
                        fullWidth
                        multiline
                        rows={4}
                        label="コミュニティ ガイドライン"
                        value={comData.guideline}
                        onChange={(e) =>
                            setComData({
                                ...comData,
                                guideline: e.target.value,
                            })
                        }
                        placeholder="仲間であるコミュニティ メンバーには親切に接し、敬意を払いましょう。無礼な態度を取ったり、酷いことをしたりするのはやめましょう。自分自身として参加し、コミュニティ規定に違反する内容は投稿しないでください。"
                        required
                        mb={2}
                    />
                ) : (
                    <Box maxWidth={600}>
                        <Typography variant="subtitle1" fontWeight={600}>
                            コミュニティ ガイドライン
                        </Typography>
                        <Typography>
                            {/* community standards. */}
                            {/* コミュニティの基準。 */}
                            {comData.guideline}{" "}
                            {/* <span
                                style={{
                                    color: "#4d5288",
                                    fontWeight: 600,
                                    cursor: "pointer",
                                }}
                            >
                                コミュニティの基準
                            </span> */}
                            。
                        </Typography>
                    </Box>
                )}
                <Box>
                    <Button onClick={handleClick}>
                        {show ? <CheckIcon /> : <EditIcon />}
                    </Button>
                </Box>
            </Box>
        </>
    );
};

export default CommunityGuideline;
