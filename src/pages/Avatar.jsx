import { Link } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import Experience from "../components/cards/models/Experience";

export default function Avatar() {
  return (
    <div >
      <Link to="/" className="absolute top-4 left-4 z-50">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Retour
        </button>
      </Link>
      <Canvas shadows camera={{ position: [0, 2, 5], fov: 75 }} style={{ width: "100vw", height: "100vh" }} className="r3f-canvas">
        <Experience />
      </Canvas>
    </div>
  );
}