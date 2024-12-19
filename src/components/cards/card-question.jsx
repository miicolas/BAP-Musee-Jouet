import { useEffect, useState } from "react";
import socketSingleton from "../../lib/socket-singleton.js";
import { Button } from "../common/buttons.jsx";
import classNames from "classnames";

export default function CardQuestion({ person, bgColor, color }) {
  const [socket, setSocket] = useState(null);

  // Set the socket
  useEffect(() => {
    setSocket(socketSingleton);
  }, []);

  // Emit the question to the socket
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
