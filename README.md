# User Management Assignment

## Objective

Develop a simple web application where users can view, add, edit, and delete user details from a mock backend API.

## Tech Stack

- **Frontend**: React
- **Backend API**: JSONPlaceholder
- **HTTP Client**: Axios or Fetch
- **Styling**: CSS or libraries like Bootstrap

## Completion Instructions

### Functionality

#### Must Have

- Display a list of users with details such as ID, First Name, Last Name, Email, and Department.
- Buttons or links to "Add", "Edit", and "Delete" users.
- A form to input details of a new user or edit details of an existing user.
- Fetch and manipulate user data via the `/users` endpoint of JSONPlaceholder.
- Error handling for API request failures with user-friendly messages.

#### Nice to Have

- Pagination or infinite scrolling for the user list.
- Client-side validation for the user input form (e.g., email format, required fields).
- Responsive UI.

### Guidelines to Develop the Project

#### Must Have

1. Use modular and reusable components:
   - **App Component**: Main wrapper.
   - **UserList Component**: Displays user list fetched from the API.
   - **UserForm Component**: Handles adding and editing user details.
   - **ErrorBoundary Component**: Catches errors and displays messages.
2. Manage state using React's `useState` or a state management library like Redux.
3. Fetch data in `componentDidMount()` or `useEffect`.
4. Use `POST`, `PUT`, and `DELETE` methods for creating, updating, and deleting users, respectively.
5. Implement clean and readable code with comments and documentation.

#### Nice to Have

- Use CSS frameworks like Bootstrap for styling.
- Optimize the application for scalability and performance.

### Submission Instructions

#### Must Have

1. Submit the project repository link on GitHub.
2. Include a `README.md` with setup instructions, project description, and usage details.
3. Ensure the project runs without errors.

#### Nice to Have

- Provide a demo link or video showcasing the app.

## Resources

### Design Files

- No specific design files provided. Create a clean and intuitive UI.

### APIs

- JSONPlaceholder `/users` endpoint:
  - Base URL: `https://jsonplaceholder.typicode.com`
  - Endpoints:
    - `GET /users`: Fetch users.
    - `POST /users`: Add a new user.
    - `PUT /users/{id}`: Edit user details.
    - `DELETE /users/{id}`: Delete a user.

### Third-party Packages

- React
- Axios or Fetch for API calls
- React Router (if navigation is required)

---

## Setup the Project

1. Initialize a new React project using `create-react-app`:
   ```bash
   npx create-react-app user-management-app
   cd user-management-app
   ```
2. Install necessary packages:
   ```bash
   npm install axios react-router-dom
   ```

---

## Component Structure

1. **App Component**: Main wrapper that holds all child components.
2. **UserList Component**: Displays the list of users fetched from the API.
3. **UserForm Component**: Handles adding and editing user details.
4. **ErrorBoundary Component**: Catches errors and displays user-friendly messages.

---

## State Management

- Use the `state` property or hooks like `useState` to manage data and UI updates:
  - **User Data**: Store the list of users fetched from the API.
  - **Form State**: Store the current user data for add/edit functionality.
  - **Error State**: Store any error messages to display when API requests fail.

---

## Features

1. **Fetching and Displaying Users**

   - Fetch the list of users using the `/users` endpoint in `componentDidMount()` or `useEffect`.
   - Display users in a table or list format with "Edit" and "Delete" buttons.

2. **Adding a New User**

   - Add an "Add User" button to open a form.
   - Form fields: ID, First Name, Last Name, Email, Department.
   - Submit the form using a `POST` request to the `/users` endpoint.

3. **Editing a User**

   - Populate form fields with the current data on clicking "Edit".
   - Submit the form using a `PUT` request to `/users/{id}`.

4. **Deleting a User**

   - Use a `DELETE` request to `/users/{id}`.
   - Remove the user from the state.

5. **Error Handling**
   - Use `try-catch` blocks for API calls.
   - Display friendly error messages to the user.

---

## Bonus Features

1. **Pagination or Infinite Scrolling**

   - Implement pagination using state variables for the current page and users per page.

2. **Client-side Validation**

   - Validate inputs like email format and required fields before submitting.

3. **Responsive UI**
   - Use CSS or a framework like Bootstrap to make the interface mobile-friendly.

---

## Links

- **GitHub Repository**: [User Management App](https://github.com/akhilbhumireddy/usermanagementapp.git)
- **Deployment Link**: [Live Demo](https://akhilsusermanagement.netlify.app/)
