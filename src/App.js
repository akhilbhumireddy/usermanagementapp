import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Modal, Alert } from "react-bootstrap";
import { getUsers, addUser, updateUser, deleteUser } from "./services/api";
import UserList from "./components/UserList";
import UserForm from "./components/UserForm";
import ErrorBoundary from "./components/ErrorBoundary";
import Pagination from "./components/Pagination";

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchUsers = async (page) => {
    try {
      const data = await getUsers(page);
      setUsers(data);
      setTotalPages(Math.ceil(data.length / 10)); // Assuming 10 users per page
    } catch (err) {
      setError("Failed to fetch users. Please try again later.");
    }
  };

  useEffect(() => {
    fetchUsers(currentPage);
  }, [currentPage]);

  const handleAddUser = async (userData) => {
    try {
      const newUser = await addUser(userData);
      setUsers([...users, newUser]);
      setIsFormOpen(false);
    } catch (err) {
      setError("Failed to add user. Please try again.");
    }
  };

  const handleUpdateUser = async (userData) => {
    try {
      const updatedUser = await updateUser(userData.id, userData);
      setUsers(
        users.map((user) => (user.id === updatedUser.id ? updatedUser : user))
      );
      setSelectedUser(null);
      setIsFormOpen(false);
    } catch (err) {
      setError("Failed to update user. Please try again.");
    }
  };

  const handleDeleteUser = async (id) => {
    try {
      await deleteUser(id);
      setUsers(users.filter((user) => user.id !== id));
    } catch (err) {
      setError("Failed to delete user. Please try again.");
    }
  };

  const handleEditUser = (user) => {
    setSelectedUser(user);
    setIsFormOpen(true);
  };

  const handleFormSubmit = (userData) => {
    if (selectedUser) {
      handleUpdateUser(userData);
    } else {
      handleAddUser(userData);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <ErrorBoundary>
      <Container className="mt-4">
        <h1 className="mb-4">User Management</h1>
        {error && (
          <Alert variant="danger" onClose={() => setError(null)} dismissible>
            {error}
          </Alert>
        )}
        <Row className="mb-3">
          <Col>
            <Button variant="primary" onClick={() => setIsFormOpen(true)}>
              Add User
            </Button>
          </Col>
        </Row>
        <UserList
          users={users}
          onEdit={handleEditUser}
          onDelete={handleDeleteUser}
        />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />

        <Modal show={isFormOpen} onHide={() => setIsFormOpen(false)}>
          <Modal.Header closeButton>
            <Modal.Title>{selectedUser ? "Edit User" : "Add User"}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <UserForm
              user={selectedUser}
              onSubmit={handleFormSubmit}
              onCancel={() => {
                setIsFormOpen(false);
                setSelectedUser(null);
              }}
            />
          </Modal.Body>
        </Modal>
      </Container>
    </ErrorBoundary>
  );
}

export default App;
