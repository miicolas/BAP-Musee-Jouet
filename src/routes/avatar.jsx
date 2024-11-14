import { Link } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import Experience from "../components/models/experience";
import { useEffect, useState } from "react";
import Layout from "../layout";
import TypeAnimationEffect from "../components/type-animation";
import SoundManager from "../components/sound-manager";
import { questions } from "../lib/utils";
import socket from "../lib/socket-singleton";
import { Meow, Bizon, Minecraft } from "../lib/sounds-import.js";


export default function Avatar() {
    const [response, setResponse] = useState(null);
    const [socketResponse, setSocketResponse] = useState(null);
    const [animateKey, setAnimateKey] = useState(0);
    const [avatarID, setAvatarID] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(true);
    const [soundAutorized, setSoundAutorized] = useState(false);
    const [sound, setSound] = useState(null);

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
        socket.on("avatar", (id) => {
            console.log("Received avatar ID:", id);
            setAvatarID(id);
        });

        return () => {
            socket.off("question");
            socket.off("avatar");
        };
    }, []);

    useEffect(() => {
        if (socketResponse && avatarID) {
            const avatar = questions.flatMap(q => q.avatars).find(avatar => avatar.id === avatarID);
            if (avatar) {
                const question = avatar.questions.find(question => question.id === socketResponse);
                if (question) {
                    setResponse(question.answer);
                    if (question.id === 1) {
                        setSound(Meow);
                    }
                    if (question.id === 2) {
                        setSound(Bizon);
                    }
                    if (question.id === 3) {
                        setSound(Minecraft);
                    }
                }
            }
        }
    }, [socketResponse, avatarID]);

    useEffect(() => {
        setAnimateKey(prevKey => prevKey + 1);
    }, [response]);

    const handleAutorization = () => {
        setSoundAutorized(true);
        setIsModalOpen(false);
    };

    return (
        <Layout>
            <Link to="/" className="absolute z-50 top-4 left-4">
                <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
                    Retour
                </button>
            </Link>
            <TypeAnimationEffect response={response} animateKey={animateKey} />
            <Canvas shadows camera={{ position: [0, 2, 5], fov: 75 }} style={{ width: "100vw", height: "100vh" }} className="r3f-canvas">
                <Experience avatarID={avatarID} />
            </Canvas>
            <SoundManager sound={sound} play={!!response} />
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg p-4 shadow-lg">
                        <h2 className="text-2xl font-bold mb-4">Bienvenue dans le jeu de rôle!</h2>
                        <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700" onClick={handleAutorization}>Ok</button>
                    </div>
                </div>
            )}
        </Layout>
    );
}