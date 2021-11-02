import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import RegisterPage from "../user/Register/RegisterPage";

export default function Router() {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <RegisterPage />
          </Route>
        </Switch>
    </BrowserRouter>
  );
}