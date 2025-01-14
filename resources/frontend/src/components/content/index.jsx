import { React, useEffect, Route } from "../../components";
import { withRouter } from "react-router-dom";
import MenuRoutes from "../router";
import { Suspense } from "react";
import Skeleton from "react-loading-skeleton";
import { PageNotFound } from "../../pages";

const Content = (props) => {
  
  const setTitle = (path, routeArray) => {
    var pageTitle;
    for (var i = 0; i < routeArray.length; i++) {
      if (routeArray[i].path === path) {
        pageTitle = "WAKABA | " + routeArray[i].title;
      }
    }
    document.title = pageTitle ? pageTitle : "WAKABA | React App";
  };
  useEffect(() => {
    setTitle(props.history.location.pathname, MenuRoutes);
    return () => {
      setTitle(props.history.location.pathname, MenuRoutes);
    };
  });

  return (
    <Suspense fallback={<Skeleton width={'100%'} height={1000} />}>
       {MenuRoutes.find((list) => list.path === props.history.location.pathname) === undefined ? (
        <Route component={() => <PageNotFound />} />
      ) : (
        MenuRoutes.map((route, index) => (
          <Route key={index} exact={route.exact} path={route.path} component={route?.component} />
        ))
      )}
    </Suspense>
  );
};

export default withRouter(Content);
