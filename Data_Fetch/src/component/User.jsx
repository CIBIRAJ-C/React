import React, { useState, useEffect } from "react";
import axios from "axios";
import "./User.css"
import Props from "./Using_Props";

const Data = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setUsers(response.data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  const deleteUser = (userId) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(() => setUsers(users.filter((user) => user.id !== userId)))
      .catch((error) => console.error("Error deleting user:", error));
  };
                         
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );
           
  return (
    <div className="dashboard">
      <h2>User Dashboard</h2>
      <input
        type="text"
        placeholder="Search users..."
        onChange={(e) => setSearch(e.target.value)}/>
      <div className="user-table">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button onClick={() => deleteUser(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      <div className="line"></div>
      <Props name={users} />  
    </div>
      
     
  );

};


export default Data;
