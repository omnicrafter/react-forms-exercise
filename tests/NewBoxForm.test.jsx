import { describe, it, expect } from "vitest";
import { render, fireEvent, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NewBoxForm from "../src/NewBoxForm";

describe("NewBoxForm", () => {
  it("renders without crashing", () => {
    render(<NewBoxForm />);
  });
});
