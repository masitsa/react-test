import React, { Component } from "react";
import User from "../components/user";
import Pagination from "../components/pagination";
// import ModalExample from "../components/modalExample";
import CreateUser from "../components/createUser";
class Users extends Component {
  state = {
    users: [],
    pages: [],
    page: this.props.match.params.id,
    updateDisplay: {
      display: "none"
    }
  };

  handleCreateUser = (name, job) => {
    if (name !== "" && job !== "") {
      var http = new XMLHttpRequest();
      var url = "https://reqres.in/api/user";
      var params = JSON.stringify({
        name: name,
        job: job
      });
      http.open("POST", url, true);

      //Send the proper header information along with the request
      http.setRequestHeader("Content-Type", "application/json");

      http.onreadystatechange = () => {
        //Call a function when the state changes.
        if (http.responseText !== "") {
          let responseText = JSON.parse(http.responseText);
          if (http.status === 201) {
            //Add to users array
            const users = [...this.state.users];
            const job = responseText.job.split(" ").join("+");

            //check if exists
            let total_users = users.length;
            let duplicate = false;
            for (let r = 0; r < total_users; r++) {
              if (users[r].id === responseText.id) {
                duplicate = true;
                break;
              }
            }

            if (duplicate === false) {
              const newUser = {
                id: responseText.id,
                first_name: responseText.name,
                last_name: responseText.job,
                avatar: "https://via.placeholder.com/350?text=" + job
              };
              users.unshift(newUser);

              //Set the state of counters to the new array
              this.setState({ users });
              alert("You have created a user with id " + responseText.id);
            }
          } else {
            alert("Oops please try again");
          }
        }
      };
      http.send(params);
    } else {
      alert("Name and job are required");
    }
  };

  handleUpdateUserShow = () => {
    let currState = this.state.updateDisplay.display;
    let newState = "";

    if (currState === "block") {
      newState = "none";
    } else {
      newState = "block";
    }

    const updateDisplay = { display: newState };
    this.setState({ updateDisplay });
  };

  handleUpdateUser = (name, job, user) => {
    if (name !== "" && job !== "") {
      var http = new XMLHttpRequest();
      var url = "https://reqres.in/api/users/" + user.id;
      var params = JSON.stringify({
        name: name,
        job: job
      });
      http.open("PATCH", url, true);

      //Send the proper header information along with the request
      http.setRequestHeader("Content-Type", "application/json");

      http.onreadystatechange = () => {
        //Call a function when the state changes.
        if (http.responseText !== "") {
          let responseText = JSON.parse(http.responseText);
          if (http.status === 200) {
            //Add to users array
            const users = [...this.state.users];

            //get the index of the parameter
            const index = users.indexOf(user);

            //Set users of the selected index to a new object. Do not directly increment the original item
            users[index] = { ...user };

            //User update
            users[index].first_name = responseText.name;
            users[index].last_name = responseText.job;

            //Set the state of users to the new array
            this.setState({ users });

            alert("You have updated " + responseText.name);
          } else {
            alert("Oops please try again");
          }
        }
      };
      http.send(params);
    } else {
      alert("Name and job are required");
    }
  };

  handleDeleteUser = user => {
    var confirmDelete = window.confirm(
      "Are you sure you want to delete " + user.first_name
    );
    if (confirmDelete === true) {
      var http = new XMLHttpRequest();
      var url = "https://reqres.in/api/users/" + user.id;

      http.open("DELETE", url, true);

      //Send the proper header information along with the request
      http.setRequestHeader("Content-Type", "application/json");

      http.onreadystatechange = () => {
        //Call a function when the state changes.
        if (http.status === 204) {
          const users = this.state.users.filter(c => c.id !== user.id);

          this.setState({ users });

          alert("You have deleted " + user.first_name);
        } else {
          alert("Oops please try again");
        }
      };
      http.send();
    } else {
      alert("Delete action cancelled");
    }
  };

  componentDidMount = () => {
    var http = new XMLHttpRequest();
    var url = "https://reqres.in/api/users?page=" + this.state.page;
    http.open("GET", url, true);

    //Send the proper header information along with the request
    http.setRequestHeader("Content-Type", "application/json");

    http.onreadystatechange = () => {
      //Call a function when the state changes.
      if (http.responseText !== "") {
        let responseText = JSON.parse(http.responseText);
        if (http.status === 200) {
          //Set the state of users to the new array
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
            users: responseText.data,
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
        <div className="row bottom-margin">
          <div className="col-md-12">
            <CreateUser onCreateUser={this.handleCreateUser} />
          </div>
        </div>

        <div className="row">
          {this.state.users.map(user => (
            <User
              key={user.id}
              user={user}
              onUpdateUserShow={this.handleUpdateUserShow}
              updateDisplay={this.state.updateDisplay}
              onUpdateUser={this.handleUpdateUser}
              onDeleteUser={this.handleDeleteUser}
            />
          ))}
        </div>
        <div className="center-align">
          <nav>
            <ul className="pagination">
              {this.state.pages.map(page => (
                <Pagination key={page.id} page={page} />
              ))}
            </ul>
          </nav>
        </div>
      </React.Fragment>
    );
  }
}

export default Users;
