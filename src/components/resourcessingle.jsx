import React, { Component } from "react";

class ResourcesSingle extends Component {
  state = {
    resource: []
  };

  componentDidMount() {
    var http = new XMLHttpRequest();
    var url = "https://reqres.in/api/unknown/" + this.props.match.params.id;
    http.open("GET", url, true);

    //Send the proper header information along with the request
    http.setRequestHeader("Content-Type", "application/json");

    http.onreadystatechange = () => {
      //Call a function when the state changes.
      if (http.responseText !== "") {
        let responseText = JSON.parse(http.responseText);
        if (http.status === 200) {
          this.setState({
            resource: responseText.data
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
            <div className="col-sm-12">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <strong>Name: </strong> {this.state.resource.name}
                </li>
                <li className="list-group-item">
                  <strong>Year: </strong> {this.state.resource.year}
                </li>
                <li className="list-group-item">
                  <strong>Color: </strong> {this.state.resource.color}
                </li>
                <li className="list-group-item">
                  <strong>Pantone Value: </strong>{" "}
                  {this.state.resource.pantone_value}
                </li>
              </ul>
              <div className="m2">
                <a href="/resources" className="btn btn-primary float-right">
                  Back
                </a>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ResourcesSingle;
