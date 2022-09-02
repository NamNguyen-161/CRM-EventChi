import { Component } from "react";

interface MyProps {
  children: React.ReactNode;
}

interface MyState {
  error: any;
}

class ErrorBoundary extends Component<MyProps, MyState> {
  state = {
    error: null,
  };
  static getDerivedStateFromError(error: any) {
    return { error };
  }
  render() {
    const { error } = this.state;

    if (error) {
      return (
        <div>
          <p>Seems like an error occured!</p>
          <p>{(error as any).message}</p>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
