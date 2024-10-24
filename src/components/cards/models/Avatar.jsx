import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Frustum, Vector3 } from "three";
import { useGLTF } from "@react-three/drei";

export default function Avatar() {
  

    const models = [
      {
        id : 1, 
        path : "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/male/model.gltf", 
      }
    ]


  const avatarMale = useGLTF("https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/male/model.gltf")


  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
{/*       <mesh scale={2}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="blue" />
      </mesh> */}

      <primitive object={avatarMale.scene} scale={2} position={[0, -2, 0]} />
    </>
  );
}
