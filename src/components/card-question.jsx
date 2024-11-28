import {useEffect, useState} from 'react';
import socketIO from 'socket.io-client';
import socketSingleton from "../lib/socket-singleton";

export default function CardQuestion({person}) {
    const [socket, setSocket] = useState(null);
    useEffect(() => {
        setSocket(socketSingleton);
    }, []);

    const handleClick = () => {
        if (socket) {
            socket.emit('question',person.id);
        }
    };

    return (
        <div
            className="p-4 m-4 transition-colors duration-300 bg-white border-2 border-orange-300 rounded-[15px]  text-center shadow-[0_4px_10px_rgba(255,165,0,0.3)] mt-60"
            onClick={handleClick}
        >
            <p>{person.question}</p>
        </div>
    );
}