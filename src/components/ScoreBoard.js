import CurrentScore from "./CurrentScore.js";
import BestScore from "./BestScore.js";

export default function ScoreBoard(props) {
  const { currentScore, bestScore } = props;
  return (
    <section className="mb-6 md:mb-8 lg:mb-12 capitalize">
      <CurrentScore currentScore={currentScore} />
      <BestScore bestScore={bestScore} />
    </section>
  );
}
