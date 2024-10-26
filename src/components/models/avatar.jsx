import { useState, useEffect } from "react";
import socketIO from "socket.io-client";
import { useGLTF } from "@react-three/drei";
import socket from "../../lib/socket-singleton.js";

export default function Avatar() {
  const [questionId, setQuestionId] = useState(null);
  const [avatarId, setAvatarId] = useState(null);

  const avatars = [
    {
      id: 1,
      name: "Barbie",
      description:
        "Barbie est une des plus grands idées de l'époque. Elle est un robot de mode, qui peut se transformer en femme, en homme ou en animal. Elle est très intelligente et elle peut parfois se faire des idées et des rêves.",
      gltf: "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/male/model.gltf",
    },
    {
      id: 2,
      name: "Lego",
      description:
        "Lego est un des plus grands inventeurs de l'époque. Il a créé des objets de toutes sortes, des robots, des véhicules, des animaux, des personnages et des jeux. Il a également créé des produits pour la santé, la beauté et la mode.",
      gltf: "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/survivor-male/model.gltf",
    },
  ];

  useEffect(() => {
    socket.on("avatar", (id) => {
      console.log("Received avatar ID:", id);
      setAvatarId(id);
    });

    socket.on("question", (id) => {
      console.log("Received question ID:", id);
      setQuestionId(id);
    });
    return () => {
      socket.off("avatar");
      socket.off("question");
    };
  }, []);

  const avatar = avatars.find((avatar) => avatar.id === avatarId);
  const avatarMale = avatar ? useGLTF(avatar.gltf) : { scene: null }; // Handle undefined avatar

  console.log(avatarId);
  console.log(questionId);

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />

      {avatarMale.scene && (
        <primitive object={avatarMale.scene} scale={2} position={[0, -2, 0]} />
      )}
    </>
  );
}