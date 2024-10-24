import { Link } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import Experience from "../components/cards/models/Experience";
import { useEffect } from "react";

export default function Avatar() {

  const handleContextMenu = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    document.addEventListener("contextmenu", handleContextMenu);
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  return (
    <div >
      <Link to="/" className="absolute z-50 top-4 left-4">
        <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
          Retour
        </button>
      </Link>
      <Canvas shadows camera={{ position: [0, 2, 5], fov: 75 }} style={{ width: "100vw", height: "100vh" }} className="r3f-canvas">
        <Experience />
      </Canvas>
    </div>
  );
}