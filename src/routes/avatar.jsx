import {Link} from "react-router-dom";
import {Canvas} from "@react-three/fiber";
import Experience from "../components/models/experience";
import {useEffect, useState, useRef} from "react";
import Layout from "../layout";
import {questions} from "../lib/utils";
import socket from "../lib/socket-singleton";
import {TypeAnimation} from 'react-type-animation';
import Bizon from "../assets/sounds/bizon.mp3";
import Meow from "../assets/sounds/meow.mp3";
import Minecraft from "../assets/sounds/minecraft.mp3";

export default function Avatar() {
    const [response, setResponse] = useState(null);
    const [socketResponse, setSocketResponse] = useState(null);
    const [animateKey, setAnimateKey] = useState(0);
    const [avatarID, setAvatarID] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(true);
    const [setSoundAutorized] = useState(false);
    const [sound, setSound] = useState(null);
    const [currentAudio, setCurrentAudio] = useState(null);
    const audioRef = useRef(null);

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
        if (response && buttonRef.current) {
            buttonRef.current.click();
        }
        if (response) {
            if (currentAudio) {
                currentAudio.pause();
                currentAudio.currentTime = 0;
            }
            const audio = new Audio(sound);
            setCurrentAudio(audio);
            audio.play().catch(error => {
                console.error("Error playing audio:", error);
            });
        }
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
            <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 h-20 max-w-sm bg-amber-700 z-50 flex justify-center items-center p-6">
                {
                    response ? (
                        <TypeAnimation
                            key={animateKey}
                            sequence={[
                                response,
                                1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            style={{fontSize: '1em', display: 'inline-block'}}
                            repeat={0}
                        />
                    ) : (
                        <p>Aucune question n'a été répondu à pour l'instant.</p>
                    )
                }
            </div>
            <Canvas shadows camera={{position: [0, 2, 5], fov: 75}} style={{width: "100vw", height: "100vh"}}
                    className="r3f-canvas">
                <Experience avatarID={avatarID}/>
            </Canvas>

            <audio ref={audioRef}/>
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg p-4 shadow-lg">
                        <h2 className="text-2xl font-bold mb-4">Bienvenue dans le jeu de rôle!</h2>
                        <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700" onClick={() => handleAutorization()}>Ok</button>
                    </div>
                </div>
            )}
        </Layout>
    );
}