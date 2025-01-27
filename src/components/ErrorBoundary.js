import React from "react";
import { Alert } from "react-bootstrap";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Alert variant="danger" className="mt-3">
          <Alert.Heading>Oops! Something went wrong.</Alert.Heading>
          <p>
            Please try refreshing the page or contact support if the problem
            persists.
          </p>
        </Alert>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
