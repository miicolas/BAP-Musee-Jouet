import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import socketSingleton from "../../lib/socket-singleton";
import "../../assets/css/card.css";

export default function CardAvatar({ person, isSelected }) {
  const [socket, setSocket] = useState(null);
  const navigate = useNavigate();
  console.log(person, "person");

  useEffect(() => {
    setSocket(socketSingleton);
  }, []);

  const handleClick = () => {
    if (socket) {
      socket.emit("avatar", person.id);
    }
    navigate(`/questions/${person.id}`);
  };

  return (
    <div
      className={`card card${person.id}`}
      id={`song-${person.id}`}
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    >
      <div className="img">
        <img
          src={isSelected ? person.gif : person.image}
          alt={person.name}
          className={`img${person.id} ${isSelected ? 'selected' : ''}`}
        />
      </div>
      <div className={`box box${person.id}`}>
        <h2>{person.name}</h2>
      </div>
    </div>
  );
}
