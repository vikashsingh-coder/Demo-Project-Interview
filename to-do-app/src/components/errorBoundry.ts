import React from "react";

type Props = { children: React.ReactNode };
type State = { hasError: boolean; error?: Error };

export default class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Send to logging service in production
    // e.g., analytics.logError(error, errorInfo);
    // console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <main role="alert" aria-live="assertive" style={{ padding: 20 }}>
          <h2>Something went wrong.</h2>
          <p>
            Try refreshing the page. If the problem persists contact support.
          </p>
        </main>
      );
    }
    return this.props.children;
  }
}
