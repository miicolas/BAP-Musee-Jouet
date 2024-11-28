import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import socketSingleton from "../lib/socket-singleton";
import Logo from "./logo";
import "../assets/css/card.css";

export default function CardAvatar({ person }) {
  const [socket, setSocket] = useState(null);
  const navigate = useNavigate(); // Utilisation de useNavigate pour la navigation

  useEffect(() => {
    setSocket(socketSingleton);
  }, []);

  const handleClick = () => {
    if (socket) {
      socket.emit("avatar", person.id);
    }
  };

  const handleDoubleClick = (e) => {
    e.stopPropagation(); // Empêche l'interférence avec d'autres événements
    navigate(`/questions/${person.id}`); // Redirection programmatique
  };

  return (
    <label
      className={`card card${person.id}`}
      htmlFor={`item-${person.id}`}
      id={`song-${person.id}`}
      onDoubleClick={handleDoubleClick} // Gestion du double clic
    >
      <div className={`card${person.id}`}>
        
        <div className="img">
          <img src={person.image} alt={person.name} />
        </div>

        <div className={`box${person.id}`}>
          <h2>{person.name}</h2>
        </div>
        
      </div>
    </label>
  );
}
