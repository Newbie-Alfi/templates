import { Component, ReactNode } from "react";
import { ErrorBoundaryContent } from "./ErrorBoundaryContent";

export interface IErrorBoundaryProps {
  children: ReactNode;
  content?: ReactNode;
}

export interface IErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<
  IErrorBoundaryProps,
  IErrorBoundaryState
> {
  constructor(props: IErrorBoundaryProps) {
    const { children, content = <ErrorBoundaryContent /> } = props;
    super({ children, content });
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    const { hasError } = this.state;
    const { children, content } = this.props;

    return hasError ? content : children;
  }
}

export default ErrorBoundary;
