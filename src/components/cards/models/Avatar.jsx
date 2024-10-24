import { useState, useEffect } from "react";
import socketIO from "socket.io-client";
import { useGLTF } from "@react-three/drei";

export default function Avatar() {
  const [questionId, setQuestionId] = useState(null);

  useEffect(() => {
    const socket = socketIO.connect("http://localhost:4000/");

    socket.on("question", (id) => {
      console.log("Received question ID:", id);
      setQuestionId(id);
    });

    return () => {
      socket.disconnect();
    };
  }, []);
  const avatarMale = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/male/model.gltf"
  );

  console.log(questionId);

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />

      <primitive object={avatarMale.scene} scale={2} position={[0, -2, 0]} />
    </>
  );
}
