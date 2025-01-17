import React, { useEffect } from "react";
import { postData, removeItem, ToastNotification } from "../../../components";
import { withRouter } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import { useAuth } from "../../../contexts/AuthContext";

const Logout = (props) => {
    const auth = useAuth();
    useEffect(() => {
        auth.setAuth(null);
        removeItem("userdata");
        props.history.push("/");
    }, [auth]);

    return (
        <div>
            <Skeleton width={"100%"} height={1000} />
        </div>
    );
};

export default withRouter(Logout);
