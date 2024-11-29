import { Link, useParams } from "react-router-dom";
import { questions } from "../lib/utils";
import CardQuestion from "../components/card-question";
import Layout from "../layout";
import useInactivityRedirect from "../lib/use-inactivity-redirect";
import { useEffect } from "react";
import Playmobilquestion from "../backgrounds/Playmobilquestion.png"; // Importer l'image

export default function Questions() {
  const { idavatar } = useParams();
  const avatarId = parseInt(idavatar);
  const avatarData = questions[0].avatars.find(
    (avatar) => avatar.id === avatarId
  );
  const avatarQuestions = avatarData ? avatarData.questions : [];
  useInactivityRedirect(120000);

  useEffect(() => {
    // Vérifier si l'avatar est trouvé et changer l'image de fond en fonction de l'id
    if (avatarData) {
      let backgroundImage = "";

      // Déterminer l'image de fond selon l'ID de l'avatar
      switch (avatarData.id) {
        case 1: // ID de Barbie par exemple
          backgroundImage = `url(${Playmobilquestion})`; // Image pour Barbie
          break;
        case 2: // ID de Ken
          backgroundImage = "url('/backgrounds/Pophie la girafe.png')"; // Image pour Ken
          break;
        case 3: // ID d'un autre avatar
          backgroundImage = "url('/backgrounds/other-avatar.png')"; // Image pour un autre avatar
          break;
        // Ajouter des images pour d'autres avatars si nécessaire
        default:
          backgroundImage = "url('/backgrounds/default-avatar.png')"; // Image par défaut
      }

      // Appliquer l'image de fond
      document.body.style.backgroundImage = backgroundImage;
      document.body.style.backgroundSize = "cover";  // Optionnel, pour couvrir tout l'écran
      document.body.style.backgroundPosition = "center"; // Centrer l'image
    }

    // Réinitialiser l'image de fond lors du départ de la page
    return () => {
      document.body.style.backgroundImage = "";
    };
  }, [avatarData]); // Ce useEffect se déclenche chaque fois que avatarData change

  return (
    <Layout>
      <Link to="/choice-avatar">
        <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
          Retour
        </button>
      </Link>
      <h1>
        Questions pour {avatarData ? avatarData.name : "Avatar introuvable"}
      </h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {avatarQuestions.length > 0 ? (
          avatarQuestions.map((index) => (
            <CardQuestion key={index.id} person={index} />
          ))
        ) : (
          <p>Aucune question trouvée pour cet avatar.</p>
        )}
      </div>
    </Layout>
  );
}
