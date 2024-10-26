import { useEffect, useState } from 'react';
import socketIO from 'socket.io-client';

export default function CardQuestion({ person }) {
  const [socket, setSocket] = useState(null);
  useEffect(() => {
    const socketConnection = socketIO.connect('http://localhost:4000/');
    
    setSocket(socketConnection);

    return () => {
      socketConnection.disconnect();
    };
  }, []);

  const handleClick = () => {
    if (socket) {
      socket.emit('question', person.id);
    }
  };

  return (
    <div className="p-4 m-4 transition-colors duration-300 bg-white border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:bg-gray-200" 
         onClick={handleClick}
    >
      <p>{person.question}</p>
    </div>
  );
}