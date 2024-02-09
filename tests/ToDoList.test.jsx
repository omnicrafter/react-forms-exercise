import { describe, it, expect } from "vitest";
import { render, fireEvent, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ToDoList from "../src/ToDoList";

describe("ToDoList", () => {
  it("renders without crashing", () => {
    render(<ToDoList />);
  });
});
