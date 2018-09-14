import React, { Component } from "react";

class CreateUser extends Component {
  state = {
    name: "",
    job: "",
    createDisplay: {
      display: "none"
    }
  };

  handleNameInput = e => {
    this.setState({ name: e.target.value });
  };

  handleJobInput = e => {
    this.setState({ job: e.target.value });
  };

  handleShow = () => {
    let currState = this.state.createDisplay.display;
    let newState = "";

    if (currState === "block") {
      newState = "none";
    } else {
      newState = "block";
    }

    const createDisplay = { display: newState };
    this.setState({ createDisplay });
  };

  render() {
    return (
      <React.Fragment>
        <button
          className="btn btn-primary float-right"
          onClick={this.handleShow}
        >
          Create User
        </button>

        <div style={this.state.createDisplay}>
          <div className="card card-view">
            <div className="card-body">
              <h5 className="card-title text-center">Create User</h5>

              <form className="form-horizontal" method="post">
                <div className="modal-body">
                  <div className="form-group">
                    <label>Full Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Full Name"
                      onChange={this.handleNameInput}
                    />
                  </div>
                  <div className="form-group">
                    <label>Job Title</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Job Title"
                      onChange={this.handleJobInput}
                    />
                  </div>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() =>
                      this.props.onCreateUser(this.state.name, this.state.job)
                    }
                  >
                    Submit
                  </button>
                  <button
                    type="button"
                    className="btn btn-default"
                    onClick={this.handleShow}
                  >
                    Close
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CreateUser;
