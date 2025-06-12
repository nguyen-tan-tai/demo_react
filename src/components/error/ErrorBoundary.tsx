import React, { Component, ErrorInfo, ReactNode } from "react";

interface Props {
    children: ReactNode;
    fallback?: ReactNode;
}

interface State {
    hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
    state: State = { hasError: false };

    static getDerivedStateFromError(): State {
        return { hasError: true };
    }

    componentDidCatch(error: Error, info: ErrorInfo) {
        console.error("Caught by ErrorBoundary:", error, info);
    }

    render() {
        if (this.state.hasError) {
            return this.props.fallback ?? (
                <div>
                    <h1>Something went wrong.</h1>
                </div>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
