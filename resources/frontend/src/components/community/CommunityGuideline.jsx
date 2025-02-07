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
                        placeholder="コミュニティのメンバーに対して親切で敬意を持って接してください。失礼な態度や残酷な態度はとらないでください。自分らしく参加し、違反する投稿はしないでください"
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
                            <span
                                style={{
                                    color: "#4d5288",
                                    fontWeight: 600,
                                    cursor: "pointer",
                                }}
                            >
                                コミュニティの基準
                            </span>
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
