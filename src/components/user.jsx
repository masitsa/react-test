import React, { Component } from "react";
import UpdateUser from "./updateUser";

class User extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <div className="col-sm-4">
          <div className="card card-view">
            <img
              className="card-img-top"
              src={this.props.user.avatar}
              alt={this.props.user.first_name}
            />
            <div className="card-body">
              <div className="card-heading bottom-margin">
                <h5 className="card-title text-center">
                  {this.props.user.first_name} {this.props.user.last_name}
                </h5>
              </div>
              <div className="row">
                <div class="col-sm-12">
                  <div class="btn-group btn-group-justified">
                    <a
                      href={"/user/" + this.props.user.id}
                      className="btn btn-primary col-sm-4"
                    >
                      View
                    </a>
                    <button
                      className="btn btn-warning col-sm-4"
                      onClick={this.props.onUpdateUserShow}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger col-sm-4"
                      onClick={() => this.props.onDeleteUser(this.props.user)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>

              <UpdateUser
                updateDisplay={this.props.updateDisplay}
                user={this.props.user}
                onUpdateUserShow={this.props.onUpdateUserShow}
                onUpdateUser={this.props.onUpdateUser}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default User;
