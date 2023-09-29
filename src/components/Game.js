import { useEffect, useState } from "react";
import ScoreBoard from "./ScoreBoard.js";
import Modal from "./Modal.js";
import Card from "./Card.js";
import { emojiData } from "../data/emojiData.js";
import shuffleArr from "../utils/shuffle.js";

export default function Game() {
  // state to change the emoji
  const [allCards, setAllCards] = useState(shuffleArr(emojiData));
  // keep record of the clicked emoji
  const [clicked, setClicked] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [result, setResult] = useState(false);

  // effect to update current score after every click
  useEffect(() => {
    setCurrentScore(clicked.length);
  }, [clicked]);

  // set best score after comparing between current and best score
  useEffect(() => {
    setBestScore((prevScore) =>
      currentScore > prevScore ? currentScore : prevScore
    );
  }, [currentScore]);

  // check if current score is 12 and if so setResult to true
  useEffect(() => {
    if (currentScore === 12) {
      setResult(true);
    }
  }, [currentScore]);

  // handle click on emoji
  function handleClick(id) {
    if (clicked.includes(id)) {
      setResult(true);
    } else {
      setClicked((prev) => [...prev, id]);
      setAllCards(shuffleArr(emojiData));
    }
  }

  const cards = allCards.map((card) => (
    <Card key={card.id} {...card} handleClick={handleClick} />
  ));

  function restartGame() {
    setCurrentScore(0);
    setClicked([]);
    setResult(false);
  }

  return (
    <main className="mx-auto p-4 md:w-3/4 lg:w-3/5">
      <ScoreBoard currentScore={currentScore} bestScore={bestScore} />
      <section className="grid grid-cols-2 gap-4 justify-items-center md:grid-cols-3 lg:gap-y-6 2xl:w-[40rem] 2xl:mx-auto">
        {cards}
      </section>
      {result && <Modal score={currentScore} resetGame={restartGame} />}
    </main>
  );
}
