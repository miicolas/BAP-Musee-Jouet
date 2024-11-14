import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import socketSingleton from "../lib/socket-singleton";
import Logo from "./logo";

export default function CardAvatar({ person }) {
    const [socket, setSocket] = useState(null);
    useEffect(() => {
        setSocket(socketSingleton);
    }, []);

    const handleClick = () => {
        if (socket) {
            socket.emit("avatar", person.id);
        }
    };

    return (
        <Link to={`/questions/${person.id}`} onClick={handleClick}>
            <div className="w-64 h-72 p-4 m-4 bg-orange-300 border-2 border-gray-200 rounded-lg transition-all duration-300 hover:border-blue-500 hover:bg-gray-200 flex flex-col justify-center items-center text-center">
                <h1 className="text-3xl font-extrabold">{person.name}</h1>
                <Logo className="w-20 h-20 mb-4" path={person.image} alt={person.name} />
                <p>{person.question}</p>
            </div>
        </Link>
    );
}
