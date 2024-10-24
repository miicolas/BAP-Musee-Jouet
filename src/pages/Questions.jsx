import { Link, useParams } from "react-router-dom";
import { questions } from "../lib/utils"; 
import CardQuestion from "../components/cards/cardQuestion";
import socketIO from 'socket.io-client';


export default function Questions() {
  const { idavatar } = useParams();
  const avatarId = parseInt(idavatar);
  const avatarData = questions[0].avatars.find((avatar) => avatar.id === avatarId);
  const avatarQuestions = avatarData ? avatarData.questions : [];
  const socket = socketIO.connect('http://localhost:4000');
  
  return (
    <div>
      <Link to="/">
        <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
          Retour
        </button>
      </Link>
      <h1>Questions pour {avatarData ? avatarData.name : 'Avatar introuvable'}</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
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
