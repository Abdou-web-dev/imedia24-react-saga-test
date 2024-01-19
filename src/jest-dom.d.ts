/// <reference types="jest" />

declare namespace jest {
  interface Matchers<R, T> {
    toHaveClass(className: string): R;
    toBeInTheDocument(): R;
    // Add other matchers if needed
  }
}
