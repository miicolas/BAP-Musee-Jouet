import { useEffect, useRef, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import * as THREE from "three";

export default function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("models/playmobil.glb");
  const { actions, names } = useAnimations(animations, group);
  const [currentActionIndex, setCurrentActionIndex] = useState(
    Math.floor(Math.random() * Object.keys(actions).length),
  );

  useEffect(() => {
    if (actions[names[currentActionIndex]]) {
      const currentAction = actions[names[currentActionIndex]];
      currentAction.reset().fadeIn(0.5).play();

      const mixer = currentAction.getMixer();
      const handleActionEnd = () => {
        setCurrentActionIndex(
          Math.floor(Math.random() * Object.keys(actions).length),
        );
      };

      mixer.addEventListener("finished", handleActionEnd);
      mixer.addEventListener("loop", handleActionEnd);

      return () => {
        mixer.removeEventListener("finished", handleActionEnd);
        mixer.removeEventListener("loop", handleActionEnd);
      };
    }
  }, [actions, names, currentActionIndex]);

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      position={[0, -2, 0]}
      scale={2}
    >
      <group name="Scene">
        <group name="metarig" position={[-0.006, 0.009, 0.001]} scale={0.916}>
          <group name="playmobile">
            <skinnedMesh
              name="Cube001"
              geometry={nodes.Cube001.geometry}
              material={materials["Material.001"]}
              skeleton={nodes.Cube001.skeleton}
            />
            <skinnedMesh
              name="Cube001_1"
              geometry={nodes.Cube001_1.geometry}
              material={materials["Material.002"]}
              skeleton={nodes.Cube001_1.skeleton}
            />
            <skinnedMesh
              name="Cube001_2"
              geometry={nodes.Cube001_2.geometry}
              material={materials["Material.004"]}
              skeleton={nodes.Cube001_2.skeleton}
            />
            <skinnedMesh
              name="Cube001_3"
              geometry={nodes.Cube001_3.geometry}
              material={materials["Material.003"]}
              skeleton={nodes.Cube001_3.skeleton}
            />
            <skinnedMesh
              name="Cube001_4"
              geometry={nodes.Cube001_4.geometry}
              material={materials["Material.008"]}
              skeleton={nodes.Cube001_4.skeleton}
            />
            <skinnedMesh
              name="Cube001_5"
              geometry={nodes.Cube001_5.geometry}
              material={materials["Material.006"]}
              skeleton={nodes.Cube001_5.skeleton}
            />
            <skinnedMesh
              name="Cube001_6"
              geometry={nodes.Cube001_6.geometry}
              material={materials["Material.007"]}
              skeleton={nodes.Cube001_6.skeleton}
            />
          </group>
          <primitive object={nodes.spine} />
          <primitive object={nodes.thighL} />
          <primitive object={nodes.thighR} />
          <primitive object={nodes.neutral_bone} />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("models/playmobil.glb");
