import React, { Component } from "react";
import { AlertCircle, RefreshCw } from "lucide-react";

/**
 * Enterprise-grade Error Boundary component.
 * Catches JavaScript errors anywhere in their child component tree,
 * logs errors, and displays a graceful fallback UI instead of crashing the app.
 */
export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <section
          className="w-full py-16 px-6 bg-sand/60 border border-line rounded-2xl my-8 text-center"
          role="alert"
          data-testid="error-boundary-fallback"
        >
          <div className="max-w-md mx-auto flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-red-100 text-red-600 flex items-center justify-center mb-4">
              <AlertCircle size={24} />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#01236A] mb-2">
              Something went wrong in this section
            </h3>
            <p className="font-sans text-sm text-muted mb-6 leading-relaxed">
              We encountered an unexpected issue while rendering this content. You can
              reload the section or continue exploring the rest of the page.
            </p>
            <button
              type="button"
              onClick={this.handleReset}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#01236A] text-[#FFD900] font-sans font-bold text-xs uppercase tracking-wider hover:opacity-95 transition-all shadow-md hover:scale-105"
            >
              <RefreshCw size={14} />
              <span>Try Again</span>
            </button>
          </div>
        </section>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
