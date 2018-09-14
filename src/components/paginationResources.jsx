import React, { Component } from "react";

class PaginationResources extends Component {
  state = {};
  render() {
    return (
      <li className={this.props.page.class}>
        <a className="page-link" href={"/resources/" + this.props.page.id}>
          {this.props.page.id}
        </a>
      </li>
    );
  }
}

export default PaginationResources;
