import { Component, type ErrorInfo, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Shreenath Enterprise caught an error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }
      return (
        <div className="p-8 text-center text-white bg-[#141414] rounded-xs border border-[#2E2E2E]">
          <h3 className="text-lg font-bold text-[#C9A227] mb-2 uppercase">Interactive Visual Temporarily Unavailable</h3>
          <p className="text-xs text-[#888888] mb-4">Please continue exploring our products and contact channels below.</p>
        </div>
      );
    }

    return this.props.children;
  }
}
