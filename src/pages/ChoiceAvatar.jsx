import { Link } from "react-router-dom";
import { avatars } from "../lib/utils";
import CardAvatar from "../components/cards/cardAvatar";

export default function ChoiceAvatar() {
  return (
    <div>
      <Link to="/">
        <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
          Retour
        </button>
      </Link>
      <h1>Choice Avatar</h1>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {avatars.map((person) => (
          <CardAvatar key={person.id} person={person} />
        ))}
      </div>
    </div>
  );
}
