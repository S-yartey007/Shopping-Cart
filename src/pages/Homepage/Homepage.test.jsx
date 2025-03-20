import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom"; // Use MemoryRouter for testing
import Homepage from "./Homepage";

describe("Homepage test", () => {
  it("Heading", () => {
    render(
      <MemoryRouter>
        <Homepage />
      </MemoryRouter>
    );
    expect(screen.getByText(/Welcome to the Home Page/i)).toBeInTheDocument();
  });
});
