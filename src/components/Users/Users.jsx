import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import "./Users.css";

const Users = () => {
  const API = "https://jsonplaceholder.typicode.com/users";
  const [users, setUsers] = useState([]);
  async function getData() {
    let res = await axios(API);
    // console.log(res.data); 
    setUsers(res.data);
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="users-div-block">
      <div className="row">
        {users.map(user => (
          <div className="user-block" key={user.id}>
            <h3 className="users">{user.name}</h3>
            <h3 className="users">{user.username}</h3>
            <h3 className="users">{user.phone}</h3>
            <h3 className="users">{user.email}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
