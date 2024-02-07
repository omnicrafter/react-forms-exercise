import { describe, it, expect } from "vitest";
import { render, fireEvent, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import BoxList from "../src/BoxList";

describe("BoxList", () => {
  it("renders without crashing", () => {
    render(<BoxList />);
  });
});
