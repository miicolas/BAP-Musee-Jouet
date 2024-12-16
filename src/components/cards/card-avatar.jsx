import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import socketSingleton from "../../lib/socket-singleton";
import "../../assets/css/card.css";

export default function CardAvatar({ person }) {
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
          src={person.image}
          alt={person.name}
          className={`img${person.id}`}
        />
      </div>

      <div className={`box box${person.id}`}>
        <h2>{person.name}</h2>
        {person.name2 && <h2 className="name2">{person.name2}</h2>}
      </div>
    </div>
  );
}
