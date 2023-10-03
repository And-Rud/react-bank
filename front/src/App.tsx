import React, { createContext, useMemo, useReducer } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error from "./component/Error";
import AuthRoute from "./component/AuthRoute";
import PrivateRoute from "./component/PrivateRoute";
import "./App.css";
import WellcomePage from "./container/WellcomePage/WellcomePage";
import SignupPage from "./container/SignupPage/SignupPage";
import SignupConfirmPage from "./container/SignupConfirmPage/SignupConfirmPage";
import SigninPage from "./container/SigninPage/SigninPage";
import RecoveryPage from "./container/RecoveryPage/RecoveryPage";
import RecoveryConfirmPage from "./container/RecoveryConfirmPage/RecoveryConfirmPage";
import BalancePage from "./container/BalancePage/BalancePage";
import NotificationsPage from "./container/NotificationsPage/NotificationsPage";
import SettingsPage from "./container/SettingsPage/SettingsPage";
import RecivePage from "./container/RecivePage/RecivePage";
import SendPage from "./container/SendPage/SendPage";
import TransactionPage from "./container/TransactionPage/TransactionPage";

export const AUTH_TYPE = {
  LOGIN: "login",
  LOGOUT: "logout",
};

const AuthContext = createContext<null | { value: string; toggle: () => void }>(
  null
);

export const AUTH_ACTION_TYPE = {
  TOGGLE: "toggle",
};

const signReducer = (state: string, action: { type: any }) => {
  switch (action.type) {
    case AUTH_ACTION_TYPE.TOGGLE:
      return state === AUTH_TYPE.LOGIN ? AUTH_TYPE.LOGIN : AUTH_TYPE.LOGOUT;

    default:
      return state;
  }
};

const App = () => {
  const [auth, dispatch] = useReducer(signReducer, AUTH_TYPE.LOGOUT);
  const authContextData = useMemo(
    () => ({
      value: auth,
      toggle: () => dispatch({ type: AUTH_ACTION_TYPE.TOGGLE }),
    }),
    [auth]
  );
  return (
    <AuthContext.Provider value={authContextData}>
      <BrowserRouter>
        <Routes>
          <Route
            index
            element={
              <AuthRoute>
                <WellcomePage />
              </AuthRoute>
            }
          />
          <Route
            path="/signup"
            element={
              <AuthRoute>
                <SignupPage />
              </AuthRoute>
            }
          />
          <Route
            path="/signup-confirm"
            element={
              <PrivateRoute>
                <SignupConfirmPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/signin"
            element={
              <AuthRoute>
                <SigninPage />
              </AuthRoute>
            }
          />
          <Route
            path="/recovery"
            element={
              <AuthRoute>
                <RecoveryPage />
              </AuthRoute>
            }
          />
          <Route
            path="/recovery-confirm"
            element={
              <AuthRoute>
                <RecoveryConfirmPage />
              </AuthRoute>
            }
          />
          <Route
            path="/balance"
            element={
              <PrivateRoute>
                <BalancePage />
              </PrivateRoute>
            }
          />
          <Route
            path="/notifications"
            element={
              <PrivateRoute>
                <NotificationsPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/settings"
            element={
              <PrivateRoute>
                <SettingsPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/recive"
            element={
              <PrivateRoute>
                <RecivePage />
              </PrivateRoute>
            }
          />
          <Route
            path="/send"
            element={
              <PrivateRoute>
                <SendPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/transaction/:transactionId"
            element={
              <PrivateRoute>
                <TransactionPage />
              </PrivateRoute>
            }
          />
          <Route path="*" Component={Error} />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
};

export default App;
