import React, { Component } from "react";
import Resource from "../components/resource";
import PaginationResources from "../components/paginationResources";

class Resources extends Component {
  state = {
    resources: [],
    pages: [],
    page: this.props.match.params.id
  };

  componentDidMount = () => {
    var http = new XMLHttpRequest();
    var url = "https://reqres.in/api/unknown?page=" + this.state.page;
    http.open("GET", url, true);

    //Send the proper header information along with the request
    http.setRequestHeader("Content-Type", "application/json");

    http.onreadystatechange = () => {
      //Call a function when the state changes.
      if (http.responseText !== "") {
        let responseText = JSON.parse(http.responseText);
        if (http.status === 200) {
          //Set the state of resources to the new array
          let page = responseText.page;
          let totalPages = responseText.total_pages;

          let pages = [];
          var current;

          for (var i = 1; i <= totalPages; i++) {
            if (i === page) {
              current = "page-item active";
            } else {
              current = "page-item";
            }
            let curPage = { id: i, class: current };
            pages.push(curPage);
          }
          this.setState({
            resources: responseText.data,
            pages: pages
          });
        } else {
        }
      }
    };
    http.send();
  };

  render() {
    return (
      <React.Fragment>
        <div className="card col-sm-12">
          <div className="card-body">
            <h5 className="card-title">Resources</h5>
            <table className="table table-condensed table-stiped table-bordered">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Year</th>
                <th>Color</th>
                <th>Pantone Value</th>
                <th>Actions</th>
              </tr>
              {this.state.resources.map(resource => (
                <Resource key={resource.id} resource={resource} />
              ))}
            </table>
          </div>
        </div>

        <nav aria-label="Page navigation example">
          <ul className="pagination">
            {this.state.pages.map(page => (
              <PaginationResources key={page.id} page={page} />
            ))}
          </ul>
        </nav>
      </React.Fragment>
    );
  }
}

export default Resources;
