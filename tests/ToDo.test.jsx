import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import ToDo from "../src/ToDo";

describe("ToDo", () => {
  it("renders without crashing", () => {
    render(<ToDo />);
  });

  it("matches snapshot", () => {
    const { asFragment } = render(
      <ToDo toDoKey="1" task="test task" removeToDo={() => {}} />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("calls the removeToDo function when the button is clicked", () => {
    const removeToDo = vitest.fn();
    const { getByText } = render(
      <ToDo toDoKey="1" task="test task" removeToDo={removeToDo} />
    );

    fireEvent.click(getByText("remove"));

    expect(removeToDo).toHaveBeenCalledTimes(1);
    expect(removeToDo).toHaveBeenCalledWith("1");
  });
});
