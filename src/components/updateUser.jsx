import React, { Component } from "react";

class UpdateUser extends Component {
  state = {
    name: this.props.user.first_name,
    job: this.props.user.last_name
  };

  handleNameInput = e => {
    this.setState({ name: e.target.value });
  };

  handleJobInput = e => {
    this.setState({ job: e.target.value });
  };

  render() {
    return (
      <React.Fragment>
        <div style={this.props.updateDisplay}>
          <h5>Update User</h5>

          <form className="form-horizontal" method="post">
            <div className="modal-body">
              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Full Name"
                  onChange={this.handleNameInput}
                  value={this.state.name}
                />
              </div>
              <div className="form-group">
                <label>Job Title</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Job Title"
                  onChange={this.handleJobInput}
                  value={this.state.job}
                />
              </div>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() =>
                  this.props.onUpdateUser(
                    this.state.name,
                    this.state.job,
                    this.props.user
                  )
                }
              >
                Submit
              </button>
              <button
                type="button"
                className="btn btn-default"
                onClick={this.props.onUpdateUserShow}
              >
                Close
              </button>
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default UpdateUser;
