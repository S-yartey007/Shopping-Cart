// src/__tests__/App.test.js
import React from "react";
import { render, screen } from "@testing-library/react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { expect, it } from "vitest";

it('renders "Hello world!" at the root path', () => {
  // Set up a mock router for testing
  const router = createMemoryRouter(
    [
      {
        path: "/",
        element: <div>Hello world!</div>,
      },
    ],
    { initialEntries: ["/"] }
  ); // simulate starting at the root "/"

  // Render the RouterProvider with the mock router
  render(<RouterProvider router={router} />);

  // Assert that "Hello world!" is rendered
  expect(screen.getByText(/hello world!/i)).toBeInTheDocument();
});
