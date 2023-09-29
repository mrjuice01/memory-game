import Card from "../components/Card.js";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const mockHandleClick = jest.fn();

describe("Card component", () => {
  it("calls handleClick correctly", () => {
    render(<Card handleClick={mockHandleClick} emoji="😂" />);
    const button = screen.getByRole("button");
    userEvent.click(button);
    expect(mockHandleClick).toHaveBeenCalledTimes(1);
  });
});
