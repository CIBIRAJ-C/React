import React from 'react'

function Props(props) {
    return (
      <div>
        <h3>User List </h3>
        <ul>
            {props.name.map((user) => (
            <li key={user.id}>{user.name}{user.email}</li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default Props;