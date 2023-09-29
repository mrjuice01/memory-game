export default function BestScore(props) {
  const { bestScore } = props;

  return (
    <div className="bg-violet-500 text-white font-bold inline-block py-2 w-36 rounded-2xl shadow-md shadow-violet-700">
      best score: {bestScore}
    </div>
  );
}
