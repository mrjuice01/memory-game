export default function Card(props) {
  const { emoji, handleClick, id } = props;
  return (
    <button
      className="text-6xl bg-violet-100 border block border-violet-300 h-28 w-28 
      rounded-full hover:shadow-2xl shadow-violet-300"
      onClick={handleClick.bind(null, id)}
    >
      {emoji}
    </button>
  );
}
