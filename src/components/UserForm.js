import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "../styles/UserForm.css";

function UserForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    department: "",
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      axios
        .get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((response) =>
          setFormData({
            name: response.data.name,
            email: response.data.email,
            department: response.data.company.name,
          })
        )
        .catch(() => setError("Failed to fetch user details"));
    }
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = id
      ? `https://jsonplaceholder.typicode.com/users/${id}`
      : "https://jsonplaceholder.typicode.com/users";
    const method = id ? "put" : "post";

    axios[method](url, { ...formData, company: { name: formData.department } })
      .then(() => navigate("/"))
      .catch(() => setError("Failed to save user"));
  };

  return (
    <div className="user-form">
      <h1>{id ? "Edit User" : "Add User"}</h1>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Department:
          <input
            type="text"
            name="department"
            value={formData.department}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default UserForm;
