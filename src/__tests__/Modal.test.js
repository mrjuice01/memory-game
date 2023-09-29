import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Modal from "../components/Modal.js";

const mockResetGame = jest.fn();

describe("Modal component", () => {
  it("calls resetGame correctly", () => {
    render(<Modal resetGame={mockResetGame} score={10} />);
    userEvent.click(screen.getByRole("button"));
    expect(mockResetGame).toBeCalled();
  });

  it("if score is < 12 shows 'you lost'", () => {
    render(<Modal resetGame={mockResetGame} score={10} />);
    expect(screen.getByText(/you lost/i)).toBeInTheDocument();
    expect(screen.getByText(/your score is 10/i)).toBeInTheDocument();
  });

  it("if score is 12 shows 'you won'", () => {
    render(<Modal resetGame={mockResetGame} score={12} />);
    expect(screen.getByText(/you won/i)).toBeInTheDocument();
  });
});
