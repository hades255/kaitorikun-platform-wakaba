import { React, useEffect } from "../../components";
import { withRouter, Switch, Route, Redirect } from "react-router-dom";
import MenuRoutes from "../router";
import { Suspense } from "react";
import Skeleton from "react-loading-skeleton";
import { PageNotFound } from "../../pages";

const setTitle = (path, routeArray) => {
    var pageTitle;
    for (var i = 0; i < routeArray.length; i++) {
        if (routeArray[i].path === path) {
            pageTitle = "WAKABA | " + routeArray[i].title;
        }
    }
    document.title = pageTitle ? pageTitle : "WAKABA | React App";
};

const Content = (props) => {
    useEffect(() => {
        setTitle(props.history.location.pathname, MenuRoutes);
        return () => {
            setTitle(props.history.location.pathname, MenuRoutes);
        };
    });

    return (
        <Suspense fallback={<Skeleton width={"100%"} height={1000} />}>
            <Switch>
                {/* {MenuRoutes.find(
                    (list) => list.path === props.history.location.pathname
                ) === undefined ? (
                    <Route component={() => <PageNotFound />} />
                ) : (
                    MenuRoutes.map((route, index) => (
                        <Route
                            key={index}
                            exact={route.exact}
                            path={route.path}
                            component={route?.component}
                        />
                    ))
                )} */}
                {MenuRoutes?.map((route, index) => (
                    <Route
                        key={index}
                        exact={route.exact}
                        path={route.path}
                        component={route?.component}
                    />
                ))}
                <Redirect to="/" />
            </Switch>
        </Suspense>
    );
};

// const isAuthenticated = () => {
//     console.log(!!localStorage.getItem("userdata"))
//     return !!localStorage.getItem("userdata");
// };

// const AuthenticatedRoute = ({ component: Component, authreq, ...rest }) => (
//     <Route
//         {...rest}
//         render={(props) =>
//             isAuthenticated() && (
//                 <Component {...props} />
//             ) : (
//                 <Redirect to="/login" />
//             )
//         }
//     />
// );

export default withRouter(Content);
