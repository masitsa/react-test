import React, { Component } from "react";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  handleEmailInput = e => {
    this.setState({ email: e.target.value });
  };

  handlePasswordInput = e => {
    this.setState({ password: e.target.value });
  };

  render() {
    return (
      <React.Fragment>
        <div className="color-line" />
        <div className="login-container">
          <div className="text-center">
            <h3>REGISTER</h3>
          </div>
          <div className="hpanel">
            <div className="panel-body">
              <form className="form-horizontal" method="post">
                <div className="form-group">
                  <label>Email:</label>
                  <input
                    type="email"
                    name="username"
                    id="username"
                    className="form-control"
                    value={this.state.email}
                    onChange={this.handleEmailInput}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Password:</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="form-control"
                    value={this.state.password}
                    onChange={this.handlePasswordInput}
                    required
                  />
                </div>
                <div className="form-group">
                  <br />
                  <input
                    type="button"
                    name="submit"
                    className="btn btn-primary btn-block"
                    value="Submit"
                    onClick={() =>
                      this.props.onRegistration(
                        this.state.email,
                        this.state.password
                      )
                    }
                  />
                </div>

                <div className="text-center">
                  <a href="/">Login</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;
