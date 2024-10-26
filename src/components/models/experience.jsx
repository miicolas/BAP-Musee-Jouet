import {
    Environment,
    PresentationControls,
    ContactShadows,
    Float,
  } from "@react-three/drei";
  import Avatar from "./avatar";
  
  export default function Experience () {
    return (
      <>
        <Environment preset="apartment" />
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
            <Avatar position={[0, 0, 0]} /> {/* Incluez Avatar directement ici */}
          </Float>
        </PresentationControls>
      </>
    );
  }