import {Link} from "react-router-dom";
import {Canvas} from "@react-three/fiber";
import Experience from "../components/models/experience";
import {useEffect, useState} from "react";
import Layout from "../layout";
import {questions} from "../lib/utils";

import socket from "../lib/socket-singleton";
import socketIO from "socket.io-client";

export default function Avatar() {
    const [response, setResponse] = useState(null);
    const [socketResponse, setSocketResponse] = useState(null);
    const handleContextMenu = (event) => {
        event.preventDefault();
    };

    useEffect(() => {
        document.addEventListener("contextmenu", handleContextMenu);
        return () => {
            document.removeEventListener("contextmenu", handleContextMenu);
        };
    }, []);


    useEffect(() => {
        socket.on("question", (id) => {
            console.log("Received question ID:", id);
            setSocketResponse(id);
        });
        return () => {
            socket.off("question");
        };
    }, []);

    // Update response based on socketResponse
    useEffect(() => {
        if (socketResponse) {
            const question = questions.flatMap(q => q.avatars)
                .flatMap(avatar => avatar.questions)
                .find(question => question.id === socketResponse);
            if (question) {
                setResponse(question.answer);
            }
        }
    }, [socketResponse]);


    return (
        <Layout>
            <Link to="/" className="absolute z-50 top-4 left-4">
                <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
                    Retour
                </button>
            </Link>

            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-20 max-w-sm bg-amber-700 z-50 flex justify-center items-center p-6">{response ? <p>{response}</p> : <p>Aucune question n'a été répondu à pour l'instant.</p>}</div>

            <Canvas shadows camera={{position: [0, 2, 5], fov: 75}} style={{width: "100vw", height: "100vh"}}
                    className="r3f-canvas">
                <Experience/>
            </Canvas>
        </Layout>
    );
}