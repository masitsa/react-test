import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Login from "./components/login";
import Users from "./components/users";
import Resources from "./components/resources";
import Error from "./components/error";
import Navbar from "./components/navbar";
import Register from "./components/register";
import UsersSingle from "./components/userssingle";
import ResourcesSingle from "./components/resourcessingle";

class App extends Component {
  state = {
    token: localStorage.getItem("token")
  };

  handleLogout = () => {
    localStorage.clear();
    let token = null;
    this.setState({ token });
    window.location.href = "/";
  };

  handleRegistration = (email, password) => {
    if (email !== "" && password !== "") {
      var http = new XMLHttpRequest();
      var url = "https://reqres.in/api/register";
      var params = JSON.stringify({
        email: email,
        password: password
      });
      http.open("POST", url, true);

      //Send the proper header information along with the request
      http.setRequestHeader("Content-Type", "application/json");

      http.onreadystatechange = () => {
        //Call a function when the state changes.
        if (http.responseText !== "") {
          let responseText = JSON.parse(http.responseText);
          if (
            http.status === 201 &&
            responseText.token === "QpwL5tke4Pnpja7X"
          ) {
            localStorage.setItem("token", responseText.token);
            this.setState({ token: responseText.token });
            alert("You have successfully registered");
          } else {
            alert("Oops please try again");
          }
        }
      };
      http.send(params);
    } else {
      alert("Email and password are required");
    }
  };

  handleLogin = (email, password) => {
    if (email !== "" && password !== "") {
      var http = new XMLHttpRequest();
      var url = "https://reqres.in/api/login";
      var params = JSON.stringify({
        email: email,
        password: password
      });
      http.open("POST", url, true);

      //Send the proper header information along with the request
      http.setRequestHeader("Content-Type", "application/json");

      http.onreadystatechange = () => {
        //Call a function when the state changes.
        if (http.responseText !== "") {
          let responseText = JSON.parse(http.responseText);
          if (
            http.status === 200 &&
            responseText.token === "QpwL5tke4Pnpja7X"
          ) {
            localStorage.setItem("token", responseText.token);
            this.setState({ token: responseText.token });
            alert("You have successfully logged in");
          } else {
            alert("Oops please try again");
          }
        }
      };
      http.send(params);
    } else {
      alert("Email and password are required");
    }
  };

  render() {
    if (this.state.token === null) {
      return (
        <BrowserRouter>
          <React.Fragment>
            <Switch>
              <Route
                path="/"
                render={props => (
                  <Login
                    {...props}
                    token={this.state.token}
                    onLogin={this.handleLogin}
                  />
                )}
                exact
              />
              <Route
                path="/register"
                render={props => (
                  <Register
                    {...props}
                    onRegistration={this.handleRegistration}
                  />
                )}
              />
              } />
              <Route component={Error} />
            </Switch>
          </React.Fragment>
        </BrowserRouter>
      );
    } else {
      return (
        <BrowserRouter>
          <React.Fragment>
            <Navbar onLogout={this.handleLogout} />
            <div className="container">
              <Switch>
                <Route path="/" component={Users} exact />
                <Route path="/users/:id" component={Users} />
                <Route path="/users" component={Users} />
                <Route path="/user/:id" component={UsersSingle} />
                <Route path="/resources/:id" component={Resources} />
                <Route path="/resources" component={Resources} />
                <Route path="/resource/:id" component={ResourcesSingle} />
                <Route component={Error} />
              </Switch>
            </div>
          </React.Fragment>
        </BrowserRouter>
      );
    }
  }
}

export default App;
