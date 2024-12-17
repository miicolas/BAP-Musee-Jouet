import { Environment, PresentationControls, Float } from "@react-three/drei";
import Avatar from "./avatar.jsx";

export default function Experience({ avatarID }) {
  return (
    <>
      <Environment preset="city" />
      <color attach="background" args={["#695b5b"]} />
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
