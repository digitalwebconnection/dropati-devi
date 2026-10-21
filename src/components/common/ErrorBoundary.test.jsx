import React from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { ErrorBoundary } from "./ErrorBoundary";

function ProblematicComponent({ shouldThrow }) {
  if (shouldThrow) {
    throw new Error("Simulated component crash");
  }
  return <div>Component rendered safely</div>;
}

describe("ErrorBoundary component", () => {
  it("renders children when no error occurs", () => {
    render(
      <ErrorBoundary>
        <ProblematicComponent shouldThrow={false} />
      </ErrorBoundary>
    );

    expect(screen.getByText("Component rendered safely")).toBeInTheDocument();
  });

  it("catches errors and renders fallback UI", () => {
    // Suppress console.error in test output for intentional throw
    const consoleErrorSpy = vi.spyOn(console, "error").mockImplementation(() => {});

    render(
      <ErrorBoundary>
        <ProblematicComponent shouldThrow={true} />
      </ErrorBoundary>
    );

    expect(screen.getByTestId("error-boundary-fallback")).toBeInTheDocument();
    expect(screen.getByText("Something went wrong in this section")).toBeInTheDocument();

    consoleErrorSpy.mockRestore();
  });

  it("renders custom fallback if provided", () => {
    const consoleErrorSpy = vi.spyOn(console, "error").mockImplementation(() => {});

    render(
      <ErrorBoundary fallback={<div>Custom Error View</div>}>
        <ProblematicComponent shouldThrow={true} />
      </ErrorBoundary>
    );

    expect(screen.getByText("Custom Error View")).toBeInTheDocument();

    consoleErrorSpy.mockRestore();
  });
});
