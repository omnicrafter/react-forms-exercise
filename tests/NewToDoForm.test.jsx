import { describe, it, expect } from "vitest";
import { render, fireEvent, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NewToDoForm from "../src/NewToDoForm";

describe("NewToDoForm", () => {
  it("renders without crashing", () => {
    render(<NewToDoForm />);
  });
});
