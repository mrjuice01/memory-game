export default function CurrentScore(props) {
  const { currentScore } = props;

  return (
    <div className="bg-yellow-500 text-white font-bold inline-block py-2 w-36 rounded-2xl mr-4 shadow-md shadow-yellow-600">
      current score: {currentScore}
    </div>
  );
}
