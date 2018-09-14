import React, { Component } from "react";

class UsersSingle extends Component {
  state = {
    user: []
  };

  componentDidMount() {
    var http = new XMLHttpRequest();
    var url = "https://reqres.in/api/users/" + this.props.match.params.id;
    http.open("GET", url, true);

    //Send the proper header information along with the request
    http.setRequestHeader("Content-Type", "application/json");

    http.onreadystatechange = () => {
      //Call a function when the state changes.
      if (http.responseText !== "") {
        let responseText = JSON.parse(http.responseText);
        if (http.status === 200) {
          this.setState({
            user: responseText.data
          });
        }
      }
    };
    http.send();
  }

  render() {
    return (
      <React.Fragment>
        <div className="card">
          <div className="row">
            <div className="col-sm-2">
              <img
                src={this.state.user.avatar}
                className="img-thumbnail"
                alt={this.state.user.first_name}
              />
            </div>
            <div className="col-sm-10">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <strong>First Name: </strong> {this.state.user.first_name}
                </li>
                <li className="list-group-item">
                  <strong>First Name: </strong> {this.state.user.last_name}
                </li>
              </ul>
              <a href="/users" className="btn btn-primary float-right">
                Back
              </a>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default UsersSingle;
