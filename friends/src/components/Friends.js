import React from "react";

const Friends = props => {
  return (
    <div className="friend-card">
      <h3>{props.name}</h3>
      <p>Age: {props.age}</p>
      <p>{props.email}</p>
    </div>
  );
};
export default Friends;
