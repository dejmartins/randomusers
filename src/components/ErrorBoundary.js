import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      errorInfo: null,
      hasError: false,
    };
  }

  static getDerivedstateFromError(error) {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
  }

  render() {
    if (this.state.errorInfo) {
      return (
        <div className="error_message">
          <h2>Fraudulent User Detected!</h2>
          <details style={{ whiteSpace: "pre-wrap", width: "70px" }}>
            {this.state.error && this.state.error.toString()}
            {/* <br />
            {this.state.errorInfo.componentStack} */}
          </details>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
