import { useLoader } from "@react-three/fiber";
import Avatar from "./avatar.jsx";
import { TextureLoader } from "three";
import {
  Environment,
  PresentationControls,
  Float,
  Html,
} from "@react-three/drei";

import PlaymobilBackground from "../../assets/images/fond_avatar_playmobil.png";
import SophieBackground from "../../assets/images/fond_avatar_sophie.png";
import KikiBackground from "../../assets/images/fond_avatar_kiki.png";

export default function Experience({ avatarID }) {
  // Set the avatars
  const avatars = [
    {
      id: 1,
      name: "Playmobil",
      background: PlaymobilBackground,
      textcolor: "#9F2727",
    },
    {
      id: 2,
      name: "Sophie la Girafe",
      background: SophieBackground,
      textcolor: "#CE9061",
    },
    { id: 3, name: "Kiki", background: KikiBackground, textcolor: "#1D5025" },
  ];

  // Set the background and the text color
  const avatar = avatars.find((avatar) => avatar.id === avatarID);
  const background = avatar ? avatar.background : "#FFFFFF";
  const texture = useLoader(TextureLoader, background);
  const color = avatar ? avatar.textcolor : "white";

  return (
    <>
      <Environment preset="lobby" />

      <mesh position={[0, 0, -15]}>
        <planeGeometry args={[200, 100]} />
        <meshBasicMaterial attach="material" map={texture} side={2} />
      </mesh>

      <Html center>
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -mt-96 z-10 flex justify-center items-center w-full">
          <h1
            className="text-6xl font-bold inline-block w-auto whitespace-nowrap mb-20 "
            style={{ color: color }}
          >
            {avatar?.name}
          </h1>
        </div>
      </Html>

      <PresentationControls
        global
        rotation={[-0.2, 0.1, 0]}
        polar={[-0.4, 0.4]}
        azimuth={[-1, 0.75]}
        config={{ mass: 2, tension: 400 }}
        snap={{ mass: 4, tension: 400 }}
      >
        <Float rotationIntensity={0.4}>
          <Avatar position={[0, 0, 0]} avatarID={avatarID} />
        </Float>
      </PresentationControls>
    </>
  );
}
