import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import * as THREE from "three";

export default function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("models/playmobil.glb");
  const { actions, names } = useAnimations(animations, group);
  console.log(names, "animations");

  useEffect(() => {
    if (actions[names[0]]) {
      actions[names[0]]
        .reset()
        .fadeIn(0.5)
        .setLoop(THREE.LoopRepeat, Infinity)
        .play();
    }
  }, [actions, names]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="metarig" position={[0, -2, 0]} scale={2}>
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
        <group
          name="ex_coté"
          position={[-4.286, -0.378, 0.963]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        />
        <group
          name="Empty"
          position={[1.007, -0.379, -2.33]}
          rotation={[Math.PI / 2, 0, 0]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("models/playmobil.glb");
