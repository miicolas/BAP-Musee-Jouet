import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import socketSingleton from "../../lib/socket-singleton.js";
import Logo from "../logo.jsx";

export default function CardAvatar({person}) {
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
            <div
                className="p-4 m-4 transition-colors duration-300 bg-white border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:bg-gray-200">
                <Logo className="h-20" path={person.image} alt={person.name}/>
                <p>{person.name}</p>
            </div>
        </Link>
    );
}
