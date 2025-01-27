import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/UserList.css";

function UserList() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  const fetchUsers = () => {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/users?_page=${currentPage}&_limit=${usersPerPage}`
      )
      .then((response) => setUsers(response.data))
      .catch((err) => setError("Failed to fetch users"));
  };

  const handleDelete = (id) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(() => setUsers(users.filter((user) => user.id !== id)))
      .catch(() => setError("Failed to delete user"));
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="user-list">
      <h1>User Management</h1>
      <button className="add-user-btn" onClick={() => navigate("/add")}>
        Add User
      </button>
      {error && <p className="error">{error}</p>}
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Department</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name.split(" ")[0]}</td>
                <td>{user.name.split(" ")[1]}</td>
                <td>{user.email}</td>
                <td>{user.company.name}</td>
                <td>
                  <button onClick={() => navigate(`/edit/${user.id}`)}>
                    Edit
                  </button>
                  <button onClick={() => handleDelete(user.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="pagination">
        {[...Array(10).keys()].map((num) => (
          <button key={num + 1} onClick={() => paginate(num + 1)}>
            {num + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default UserList;
