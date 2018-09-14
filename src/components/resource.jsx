import React, { Component } from "react";

class Resource extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <tr>
          <td>{this.props.resource.id}</td>
          <td>{this.props.resource.name}</td>
          <td>{this.props.resource.year}</td>
          <td>{this.props.resource.color}</td>
          <td>{this.props.resource.pantone_value}</td>
          <td>
            <a
              href={"/resource/" + this.props.resource.id}
              className="btn btn-primary"
            >
              View
            </a>
          </td>
        </tr>
      </React.Fragment>
    );
  }
}

export default Resource;
