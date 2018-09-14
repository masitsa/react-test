import React from "react";
import { Route, IndexRoute } from "react-router";
import App from "./App";
import Register from "./components/register";
import Login from "./components/login";
import Users from "./components/users";
import Resources from "./components/resources";

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Login} />
    <Route path="register" component={Register} />
    <Route path="Login" component={Login} />{" "}
    <Route path="users" component={Users} />
    <Route path="resources" component={Resources} />
  </Route>
);
