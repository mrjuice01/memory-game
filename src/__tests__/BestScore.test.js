import { render, screen } from "@testing-library/react";
import BestScore from "../components/BestScore.js";

describe("BestScore component", () => {
  it("shows best score correctly", () => {
    render(<BestScore bestScore={5} />);
    expect(screen.getByText(/best score: 5/i)).toBeInTheDocument();
  });
});
