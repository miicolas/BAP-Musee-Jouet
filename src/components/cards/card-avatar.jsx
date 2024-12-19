import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import socketSingleton from "../../lib/socket-singleton";
import "../../assets/css/card.css";

export default function CardAvatar({ person, isSelected }) {
  const [socket, setSocket] = useState(null);
  const navigate = useNavigate();

  // Set the socket
  useEffect(() => {
    setSocket(socketSingleton);
  }, []);

  // Emit the avatar to the socket
  const handleClick = () => {
    if (socket) {
      socket.emit("avatar", person.id);
    }
    navigate(`/questions/${person.id}`);
  };

  return (
    <div
      className={`card card${person.id} cursor-pointer flex justify-center items-center gap-5`}
      id={`song-${person.id}`}
      onClick={handleClick}
    >
      <img
        src={isSelected ? person.gif : person.image}
        alt={person.name}
        className={`h-64 lg:h-96 object-contain ${isSelected ? "selected" : ""}`}
      />
      <h2 className="font-bold text-3xl uppercase text-white">{person.name}</h2>
    </div>
  );
}
