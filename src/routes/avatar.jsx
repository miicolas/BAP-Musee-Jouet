import { Link } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import Experience from "../components/experience.jsx";
import { useEffect, useState } from "react";
import Layout from "../layout";
import TypeAnimationEffect from "../components/type-animation";
import SoundManager from "../components/sound-manager";
import { questions } from "../lib/utils";
import socket from "../lib/socket-singleton";
import { Meow, Bizon, Minecraft } from "../lib/sounds-import.js";
import { AnimatePresence, motion } from "framer-motion"; // Imported from framer-motion instead of motion/react

export default function Avatar() {
    const [response, setResponse] = useState(null);
    const [socketResponse, setSocketResponse] = useState(null);
    const [animateKey, setAnimateKey] = useState(0);
    const [avatarID, setAvatarID] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(true);
    const [soundAuthorized, setSoundAuthorized] = useState(false);
    const [sound, setSound] = useState(null);
    const [show, setShow] = useState(true);

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
                    setSound(
                        question.id === 1 ? Meow :
                            question.id === 2 ? Bizon :
                                question.id === 3 ? Minecraft : null
                    );
                }
            }
        }
    }, [socketResponse, avatarID]);

    useEffect(() => {
        setAnimateKey(prevKey => prevKey + 1);
    }, [response]);

    const handleAuthorization = () => {
        setSoundAuthorized(true);
        setIsModalOpen(false);
    };

    return (
        <Layout>
            <Link to="/" className="absolute z-50 top-4 left-4">
                <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
                    Retour
                </button>
            </Link>

            {avatarID ? (
                <>
                    <TypeAnimationEffect response={response} animateKey={animateKey} />
                    <Canvas shadows camera={{ position: [0, 2, 5], fov: 75 }} style={{ width: "100vw", height: "100vh" }} className="r3f-canvas">
                        <Experience avatarID={avatarID} />
                    </Canvas>
                </>
            ) : (
                <AnimatePresence>
                    {!avatarID && show && (
                        <motion.div
                            key="box"
                            exit={{ opacity: 0, scale: 1.1 }}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white"
                        >
                            <h1 className="text-4xl font-bold mb-4">Bienvenue sur l'Application Avatar</h1>
                            <p className="text-lg mb-8">Veuillez sélectionner un avatar pour commencer l'expérience.</p>
                            <p className="text-sm text-gray-400">
                                En attente de la sélection d'un avatar en temps réel...
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>
            )}

            <SoundManager sound={sound} play={!!response} />

            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <div className="bg-white rounded-lg p-4 shadow-lg">
                            <h2 className="text-2xl font-bold mb-4">Bienvenue dans le jeu de rôle!</h2>
                            <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700" onClick={handleAuthorization}>
                                Ok
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </Layout>
    );
}
