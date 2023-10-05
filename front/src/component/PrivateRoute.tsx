import { Navigate } from "react-router-dom";
import { AuthContext } from "../App";
import Error from "./Error";
import React from "react";

const PrivateRoute = ({ children }: { children: any }) => {
  const auth = React.useContext(AuthContext);

  if (!auth) return <Error />;

  return auth ? <>{children}</> : <Navigate to="/" replace />;
};

export default PrivateRoute;
