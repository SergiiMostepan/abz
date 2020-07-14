import React, { Component } from "react";

class Users extends Component {
  componentDidMount() {
    this.props.getUsers();
    // console.log(this.props.usersState);
  }

  render() {
    const users = this.props.usersState.users;
    console.log(users);
    return (
      <section className={"users-section"} id="users">
        <div className={"users-container"}>
          <h1 className={"users-header"}>Our cheerful users</h1>
          <p className={"users-text"}>
            Attention! Sorting users by registration date
          </p>
          <div className={"users"}>
            {users ? (
              users.map((user) => (
                <div key={user.id} className={"users-info"}>
                  <div className={"users-info-image-container"}>
                    <img
                      className={"users-info-image"}
                      src={user.photo}
                      alt="user photo"
                    ></img>
                  </div>
                  <h2 className={"users-info-name"}>{user.name}</h2>
                  <div className={"users-info-details"}>
                    <p className={"users-info-details-items"}>
                      {user.position}
                    </p>
                    <p className={"users-info-details-items"}>{user.email}</p>
                    <p className={"users-info-details-items"}>{user.phone}</p>
                  </div>
                </div>
              ))
            ) : (
              <div> No content</div>
            )}
          </div>
          <div className={"users-btn-container"}>
            <button className={"users-btn"}>Show more</button>
          </div>
        </div>
      </section>
    );
  }
}

export default Users;
