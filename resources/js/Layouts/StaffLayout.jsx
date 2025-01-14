import React from "react";
import StaffNavigation from "./StaffNavigation";
import StaffSidebar from "./StaffSidebar";
import { Head } from "@inertiajs/react";
import StaffMenuItems from "./StaffMenuItems";

export default function StaffLayout({ children, title, user }) {
    return (
        <React.Fragment>
            <Head title={title} />
            <div className="staff-layout">
                <StaffNavigation user={user}/>
                {/* <StaffMenuItems/> */}
                <div className="main">
                    <StaffSidebar />
                    <div className="page-content">
                        {children}
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}