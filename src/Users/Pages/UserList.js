import React from "react";
import UserItem from "../Components/UserItem";

const UserList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="center">
        <h2>No users found.</h2>
      </div>
    );
  }

  return (
    <div className="user-list">
      <ul style={{ listStyle: "none" }}>
        {props.items.map((user) => (
          <li key={user.id}>
            <UserItem
              key={user.id}
              id={user.id}
              image={user.image}
              name={user.name}
              placeCount={user.places}
            ></UserItem>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
