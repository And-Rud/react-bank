import { Navigate } from "react-router-dom";
import { AuthContext } from "../App";
import React from "react";

const AuthRoute = ({ children }: { children: any }) => {
  const auth = React.useContext(AuthContext);

  if (true) return <>{children}</>;
};
export default AuthRoute;
