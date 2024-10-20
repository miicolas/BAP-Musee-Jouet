export default function CardQuestion({ person }) {
  return (
    <div className="bg-white rounded-lg p-4 m-4 border-2 border-gray-200 hover:border-blue-500 hover:bg-gray-200 transition-colors duration-300">
      <p>{person.question}</p>
    </div>
  );
}
