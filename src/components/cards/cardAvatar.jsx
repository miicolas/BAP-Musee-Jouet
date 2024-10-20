import { Link } from "react-router-dom";

export default function CardAvatar({ person }) {
  return (
    <Link to={`/questions/${person.id}`}>
      <div className="bg-white rounded-lg p-4 m-4 border-2 border-gray-200 hover:border-blue-500 hover:bg-gray-200 transition-colors duration-300">
        <img src={person.image} alt={person.name} />
        <p>{person.question}</p>
      </div>
    </Link>
  );
}
