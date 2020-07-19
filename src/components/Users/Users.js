import React, { Component } from "react";
import { Tooltip } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  tooltip: {
    boxShadow: "3px 3px 8px rgba(0, 0, 0, 0.3)",
    borderRadius: "4px",
    backgroundColor: "#000000",
    color: "rgba(254, 254, 254, 0.8)",
    fontSize: "14px",
  },
};

const CustomTooltip = withStyles(styles)(Tooltip);

class Users extends Component {
  state = { page: 1 };

  componentDidMount() {
    this.props.getUsers();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.page !== this.state.page) {
      this.props.getUsers(this.state.page);
    }
  }

  hendleLoadMoreUsers = () => {
    this.setState((prevState) => {
      return {
        page: prevState.page + 1,
      };
    });
  };

  render() {
    const users = this.props.usersState;
    return (
      <section className={"users-section"} id="users">
        <div className={"users-container"}>
          <h1 className={"users-header"}>Our cheerful users</h1>
          <p className={"users-text"}>
            Attention! Sorting users by registration date
          </p>
          <div className={"users-flex-container"}>
            <div className={"users"}>
              {users ? (
                users.map((user) => (
                  <div key={user.id} className={"users-info"}>
                    <div className={"users-info-image-container"}>
                      <img
                        className={"users-info-image"}
                        src={user.photo}
                        alt="user img"
                      ></img>
                    </div>
                    <h2 className={"users-info-name"}>{user.name}</h2>
                    <div className={"users-info-details"}>
                      <p className={"users-info-details-items"}>
                        {user.position}
                      </p>
                      <CustomTooltip title={user.email}>
                        <p className={"users-info-details-items"}>
                          {user.email}
                        </p>
                      </CustomTooltip>
                      <p className={"users-info-details-items"}>{user.phone}</p>
                    </div>
                  </div>
                ))
              ) : (
                <div> No content</div>
              )}
            </div>
          </div>
          {this.props.pageState !== this.state.page && (
            <div className={"users-btn-container"}>
              <button
                className={"users-btn"}
                onClick={this.hendleLoadMoreUsers}
              >
                Show more
              </button>
            </div>
          )}
        </div>
      </section>
    );
  }
}

export default Users;
