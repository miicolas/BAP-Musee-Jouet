import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import socketSingleton from "../lib/socket-singleton";
import "../assets/css/card.css";

export default function CardAvatar({ person }) {
  const [socket, setSocket] = useState(null);
  const navigate = useNavigate(); // Hook pour la navigation

  useEffect(() => {
    setSocket(socketSingleton);
  }, []);

  const handleClick = () => {
    if (socket) {
      socket.emit("avatar", person.id);
    }
    navigate(`/questions/${person.id}`); // Navigue vers la page de la question
  };

  return (
    <div
      className={`card card${person.id}`}
      id={`song-${person.id}`}
      onClick={handleClick} // Ajout de l'événement onClick
      style={{ cursor: "pointer" }} // Ajoute un pointeur pour montrer que c'est cliquable
    >
      {/* Image de la carte */}
      <div className="img">
        <img
          src={person.image}
          alt={person.name}
          className={`img${person.id}`} // Classe dynamique basée sur l'identifiant
        />
        </div>
      {/* Nom et texte de la carte */}
      <div className={`box box${person.id}`}>
        <h2>{person.name}</h2>
        {person.name2 && (
          <h2 className="name2">{person.name2}</h2> /* Affiche name2 si présent */
        )}
      </div>
    </div>
  );
}
