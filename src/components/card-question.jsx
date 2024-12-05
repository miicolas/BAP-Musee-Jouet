import { useEffect, useState } from 'react';
import socketSingleton from "../lib/socket-singleton";

export default function CardQuestion({newButtonTextcolor,person, backgroundColor, borderColor, textColor, newButtonbgcolor,newButtonBorderColor}) {
    const [socket, setSocket] = useState(null);

    useEffect(() => {
        setSocket(socketSingleton);
    }, []);

    const handleClick = () => {
        if (socket) {
            socket.emit('question', person.id);
        }
    };

    return (
        <div className="flex justify-center items-center mt-32">
            <div
                className={`backdrop-blur-xl w-[300px] text-xl p-6 m-4 transition-colors duration-300 rounded-[50px] text-center ${newButtonbgcolor} border-b-8 ${borderColor}`}
                onClick={handleClick}
            >
               <p className={`text-xl font-bold ${newButtonTextcolor}`}>{person.question}</p>

            </div>
        </div>
    );
}
