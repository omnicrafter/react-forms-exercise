import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Box from "../src/Box";

describe("Box", () => {
  it("renders without crashing", () => {
    render(<Box />);
  });

  it("matches snapshot", () => {
    const { asFragment } = render(
      <Box
        boxKey="1"
        color="red"
        width="100"
        height="100"
        removeBox={() => {}}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("calls the removeBox function when the button is clicked", () => {
    const removeBox = vitest.fn();
    const { getByText } = render(
      <Box
        boxKey="1"
        color="red"
        width="100"
        height="100"
        removeBox={removeBox}
      />
    );

    fireEvent.click(getByText("X"));

    expect(removeBox).toHaveBeenCalledTimes(1);
    expect(removeBox).toHaveBeenCalledWith("1");
  });
});
