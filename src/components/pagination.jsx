import React, { Component } from "react";

class Pagination extends Component {
  state = {};
  render() {
    return (
      <li className={this.props.page.class}>
        <a className="page-link" href={"/users/" + this.props.page.id}>
          {this.props.page.id}
        </a>
      </li>
    );
  }
}

export default Pagination;
