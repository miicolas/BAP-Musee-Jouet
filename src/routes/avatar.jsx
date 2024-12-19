import { Canvas } from "@react-three/fiber";
import Experience from "../components/features/experience.jsx";
import { useEffect, useState } from "react";
import Layout from "../layout";
import TypeAnimationEffect from "../components/common/type-animation.jsx";
import SoundManager from "../components/common/sound-manager.jsx";
import { questions } from "../lib/utils";
import socket from "../lib/socket-singleton";
import {
  Playmobil_sound_1,
  Playmobil_sound_2,
  Playmobil_sound_3,
  Playmobil_sound_4,
  Playmobil_sound_5,
  Playmobil_sound_6,
  Playmobil_sound_7,
  Playmobil_sound_8,
  Playmobil_sound_9,
  Playmobil_sound_10,
  Sophie_sound_1,
  Sophie_sound_2,
  Sophie_sound_3,
  Sophie_sound_4,
  Sophie_sound_5,
  Sophie_sound_6,
  Sophie_sound_7,
  Sophie_sound_8,
  Sophie_sound_9,
  Sophie_sound_10,
  Kiki_sound_1,
  Kiki_sound_2,
  Kiki_sound_3,
  Kiki_sound_4,
  Kiki_sound_5,
  Kiki_sound_6,
  Kiki_sound_7,
  Kiki_sound_8,
  Kiki_sound_9,
  Kiki_sound_10,
} from "../lib/sounds-import.js";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "../components/common/buttons.jsx";


export default function Avatar() {
  const [response, setResponse] = useState(null);
  const [socketResponse, setSocketResponse] = useState(null);
  const [animateKey, setAnimateKey] = useState(0);
  const [avatarID, setAvatarID] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [soundAuthorized, setSoundAuthorized] = useState(false);
  const [sound, setSound] = useState(null);
  const [show, setShow] = useState(true);

  
  
// Set the sound for each question for the selected avatar
const audioRun = (questionID) => {
  let sound = {};
  if (avatarID == 1) {
    sound = {
      1: Playmobil_sound_1,
      2: Playmobil_sound_2,
      3: Playmobil_sound_3,
      4: Playmobil_sound_4,
      5: Playmobil_sound_5,
      6: Playmobil_sound_6,
      7: Playmobil_sound_7,
      8: Playmobil_sound_8,
      9: Playmobil_sound_9,
      10: Playmobil_sound_10
    };
  }else if (avatarID == 2){
    sound = {
      1: Sophie_sound_1,
      2: Sophie_sound_2,
      3: Sophie_sound_3,
      4: Sophie_sound_4,
      5: Sophie_sound_5,
      6: Sophie_sound_6,
      7: Sophie_sound_7,
      8: Sophie_sound_8,
      9: Sophie_sound_9,
      10: Sophie_sound_10
    };
   }else if (avatarID == 3) {
    sound = {
      1: Kiki_sound_1,
      2: Kiki_sound_2,
      3: Kiki_sound_3,
      4: Kiki_sound_4,
      5: Kiki_sound_5,
      6: Kiki_sound_6,
      7: Kiki_sound_7,
      8: Kiki_sound_8,
      9: Kiki_sound_9,
      10: Kiki_sound_10
    };
   }
  return sound[questionID];
};
  // Prevent right click
  const handleContextMenu = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    document.addEventListener("contextmenu", handleContextMenu);
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  // Get the avatar ID and the question ID from the socket
  useEffect(() => {
    socket.on("question", (id) => {
      setSocketResponse(id);
    });
    socket.on("avatar", (id) => {
      setResponse(null);
      setAvatarID(id);
    });

    return () => {
      socket.off("question");
      socket.off("avatar");
    };
  }, []);

  // Get the response from the socket and set the sound
  useEffect(() => {
    if (socketResponse && avatarID) {
      const avatar = questions
        .flatMap((q) => q.avatars)
        .find((avatar) => avatar.id === avatarID);
      if (avatar) {
        const question = avatar.questions.find(
          (question) => question.id === socketResponse
        );
        if (question) {
          setResponse(question.answer);
          setSound(audioRun(question.id));
        }
      }
    }
  }, [socketResponse, avatarID]);

  // Play the sound when the response is set
  useEffect(() => {
    setAnimateKey((prevKey) => prevKey + 1);
  }, [response]);

  // Play the sound when user authorizes it in the modal
  const handleAuthorization = () => {
    setSoundAuthorized(true);
    setIsModalOpen(false);
  };

  return (
    <Layout>
      {avatarID ? (
        <>
          <TypeAnimationEffect response={response} animateKey={animateKey} />
          <Canvas
            shadows
            camera={{ position: [0, 2, 5], fov: 75 }}
            style={{ width: "100vw", height: "100vh" }}
            className="r3f-canvas"
          >
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
              className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-yellow-200 via-gray-100 to-orange-300 text-black animate-background-wave"
            >
              <h1 className="text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-700 via-orange-500 to-red-500 text-center">
                Bienvenue sur l'Application du Musée du Jouet
              </h1>
              <p className="text-center text-lg mb-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-700 via-orange-500 to-red-500">
                Veuillez sélectionner un personnage pour commencer l'activité.
              </p>
              <p className="text-sm text-transparent bg-clip-text bg-gradient-to-r from-orange-700 via-orange-500 to-red-500 italic ">
                En attente de la sélection d'un personnage...
              </p>

              <style>{`
                @keyframes backgroundWave {
                  0% {
                    background-position: 0% 50%;
                  }
                  50% {
                    background-position: 100% 50%;
                  }

                  100% {
                    background-position: 0% 50%;
                  }
                }

                .animate-background-wave {
                  background-size: 200% 200%;
                  animation: backgroundWave 20s ease-in-out infinite;
                }
              `}</style>
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
              <h2 className="text-2xl font-bold mb-4">
                Bienvenue dans le jeu de rôle!
              </h2>
              <Button
                className="bg-orange-500 text-white text-sm"
                styleType="primary"
                onClick={handleAuthorization}
              >
                Accepter
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
}
