import { useEffect, useState } from "react";
import socketSingleton from "../../lib/socket-singleton.js";
import { Button } from "../buttons.jsx";
import classNames from "classnames";

export default function CardQuestion({ person, bgColor, color }) {
  const [socket, setSocket] = useState(null);
  useEffect(() => {
    setSocket(socketSingleton);
  }, []);

  const handleClick = () => {
    if (socket) {
      socket.emit("question", person.id);
    }
  };

  return (
    <Button
      className={classNames(`${bgColor} ${color}`)}
      onClick={handleClick}
      styleType="primary"
    >
      <p>{person.question}</p>
    </Button>
  );
}
