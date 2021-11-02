import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import RegisterPage from "../user/register/RegisterPage";
import RegisterSuccessPage from "../user/register/RegisterSuccessPage";

export default function Router() {
  return (
    <BrowserRouter >
        <Switch>
          <Route exact path="/">
            <RegisterPage />
          </Route>
          <Route exact path="/success">
            <RegisterSuccessPage />
          </Route>
        </Switch>
    </BrowserRouter>
  );
}