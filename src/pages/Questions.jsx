import { Link, useParams } from "react-router-dom";
import { questions } from "../lib/utils"; 
import CardQuestion from "../components/cards/cardQuestion";

export default function Questions() {
  const { idavatar } = useParams();
  const avatarId = parseInt(idavatar);
  const avatarData = questions[0].avatars.find((avatar) => avatar.id === avatarId);
  const avatarQuestions = avatarData ? avatarData.questions : [];

  return (
    <div>
      <Link to="/">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Retour
        </button>
      </Link>
      <h1>Questions pour {avatarData ? avatarData.name : 'Avatar introuvable'}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {avatarQuestions.length > 0 ? (
          avatarQuestions.map((index) => (
            <CardQuestion key={index.id} person={index} />
          ))
        ) : (
          <p>Aucune question trouvée pour cet avatar.</p>
        )}
      </div>
    </div>
  );
}
