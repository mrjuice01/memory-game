import { render, screen } from "@testing-library/react";
import CurrentScore from "../components/CurrentScore.js";

describe("CurrentScore", () => {
  it("shows current score correctly", () => {
    render(<CurrentScore currentScore={5} />);
    expect(screen.getByText(/current score: 5/i)).toBeInTheDocument();
  });
});
