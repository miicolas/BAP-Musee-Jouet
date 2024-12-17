import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import socketSingleton from "../../lib/socket-singleton";
import "../../assets/css/card.css";

export default function CardAvatar({ person }) {
  const [socket, setSocket] = useState(null);
  const navigate = useNavigate();

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
      className={`card card${person.id} cursor-pointer flex justify-center items-center gap-5`}
      id={`song-${person.id}`}
      onClick={handleClick}
    >
      <img
        src={person.image}
        alt={person.name}
        className={`h-64 lg:h-96 object-contain`}
      />
      <h2 className="font-bold text-3xl uppercase text-white">{person.name}</h2>
    </div>
  );
}
