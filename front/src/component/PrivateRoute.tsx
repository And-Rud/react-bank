import { Navigate } from "react-router-dom";
import { AuthContext } from "../App";
import Error from "./Error";
import React from "react";

const PrivateRoute: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const auth = React.useContext(AuthContext);

  if (!auth) return <Error />;

  return auth.state.isLogged ? <>{children}</> : <Navigate to="/" replace />;
};

export default PrivateRoute;
