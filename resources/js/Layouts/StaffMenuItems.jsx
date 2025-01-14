import React from "react";
import Button from "@mui/material/Button"
import ButtonLink from "@/Components/ButtonLink";

export default function StaffMenuItems() {
    return (
        <React.Fragment>
            <div className="staff-menu-items">
                <div className="inner flex items-center justify-between gap-6 px-4 py-2 shadow-lg">
                    <ButtonLink href="#">始業</ButtonLink>
                    <ButtonLink href="#">TODO</ButtonLink>
                    <ButtonLink href="#">売上表</ButtonLink>
                    <ButtonLink href="#">業者査定シート</ButtonLink>
                    <ButtonLink href="#">業者卸発送一覧</ButtonLink>
                    <ButtonLink href="#">月次収支報告書</ButtonLink>
                    <ButtonLink href="#">金庫入出金履歴</ButtonLink>
                    <ButtonLink href="#">終業</ButtonLink>
                </div>
            </div>
        </React.Fragment>
    )
}