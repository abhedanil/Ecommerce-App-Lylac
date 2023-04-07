import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...props }) => {
  const token = localStorage.getItem("jwtToken");

  return (
    <Route
      {...props}
      render={(props) =>
        token ? (
          <Component {...props} />
        ) : (
            
          <Redirect         
            to={{
              pathname: "/login",
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;