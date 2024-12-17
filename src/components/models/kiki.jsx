import { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import * as THREE from "three";

export default function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("models/kiki.glb");
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
    <group ref={group} {...props} dispose={null} position={[0, -2, 0]}>
      <group name="Scene">
        <group
          name="Empty"
          position={[0.039, 3.141, -2.221]}
          rotation={[1.454, 0.004, -0.033]}
        />
        <group
          name="BezierCircle002"
          position={[0, 2.269, -0.659]}
          rotation={[1.567, 0, 0]}
        />
        <group
          name="BezierCircle003"
          position={[0, 2.269, -0.659]}
          rotation={[1.567, 0, 0]}
        />
        <group
          name="BezierCircle004"
          position={[0, 2.269, -0.659]}
          rotation={[1.567, 0, 0]}
        />
        <group
          name="BezierCircle005"
          position={[0, 2.269, -0.659]}
          rotation={[1.567, 0, 0]}
        />
        <group
          name="BezierCircle006"
          position={[0.153, 2.24, -0.781]}
          rotation={[1.586, 0.035, 0.07]}
        />
        <group
          name="BezierCircle007"
          position={[-0.157, 1.987, -1.228]}
          rotation={[1.658, -0.095, -0.021]}
        />
        <group
          name="BezierCircle008"
          position={[-0.237, 1.966, -1.438]}
          rotation={[1.658, -0.095, -0.021]}
        />
        <group
          name="BezierCircle009"
          position={[-0.351, 1.931, -1.587]}
          rotation={[1.658, -0.095, -0.021]}
        />
        <group
          name="BezierCircle010"
          position={[-0.919, 1.9, -1.232]}
          rotation={[1.605, -0.124, -0.498]}
        />
        <group
          name="BezierCircle011"
          position={[-1.042, 1.913, -1.289]}
          rotation={[1.605, -0.124, -0.498]}
        />
        <group
          name="BezierCircle012"
          position={[-1.196, 1.933, -1.269]}
          rotation={[1.605, -0.124, -0.498]}
        />
        <group
          name="BezierCircle013"
          position={[-1.313, 1.693, -0.979]}
          rotation={[1.45, -0.145, -0.482]}
          scale={1.057}
        />
        <group
          name="BezierCircle014"
          position={[-1.151, 1.665, -0.994]}
          rotation={[1.45, -0.145, -0.482]}
          scale={1.057}
        />
        <group
          name="BezierCircle015"
          position={[-1.022, 1.659, -0.929]}
          rotation={[1.45, -0.145, -0.482]}
          scale={1.057}
        />
        <group
          name="BezierCircle016"
          position={[-0.416, 1.621, -1.295]}
          rotation={[1.502, -0.115, -0.005]}
          scale={1.057}
        />
        <group
          name="BezierCircle017"
          position={[-0.297, 1.68, -1.143]}
          rotation={[1.502, -0.115, -0.005]}
          scale={1.057}
        />
        <group
          name="BezierCircle018"
          position={[-0.216, 1.735, -0.926]}
          rotation={[1.502, -0.115, -0.005]}
          scale={1.057}
        />
        <group
          name="BezierCircle019"
          position={[-0.052, 2.12, -0.376]}
          rotation={[1.41, -0.021, 0.014]}
          scale={1.057}
        />
        <group
          name="BezierCircle020"
          position={[-0.052, 2.12, -0.376]}
          rotation={[1.41, -0.021, 0.014]}
          scale={1.057}
        />
        <group
          name="BezierCircle"
          position={[0, 2.269, -0.659]}
          rotation={[1.567, 0, 0]}
        />
        <group
          name="BezierCircle001"
          position={[0, 2.269, -0.659]}
          rotation={[1.567, 0, 0]}
        />
        <group
          name="BezierCircle021"
          position={[-1.061, 1.867, -1.403]}
          rotation={[1.605, -0.124, -0.498]}
        />
        <group name="metarig001">
          <group name="CORPS">
            <skinnedMesh
              name="Cube006"
              geometry={nodes.Cube006.geometry}
              material={materials["Material.024"]}
              skeleton={nodes.Cube006.skeleton}
            />
            <skinnedMesh
              name="Cube006_1"
              geometry={nodes.Cube006_1.geometry}
              material={materials["Material.001"]}
              skeleton={nodes.Cube006_1.skeleton}
            />
            <skinnedMesh
              name="Cube006_2"
              geometry={nodes.Cube006_2.geometry}
              material={materials["Material.022"]}
              skeleton={nodes.Cube006_2.skeleton}
            />
            <skinnedMesh
              name="Cube006_3"
              geometry={nodes.Cube006_3.geometry}
              material={materials["Material.002"]}
              skeleton={nodes.Cube006_3.skeleton}
            />
            <skinnedMesh
              name="Cube006_4"
              geometry={nodes.Cube006_4.geometry}
              material={materials["Material.003"]}
              skeleton={nodes.Cube006_4.skeleton}
            />
            <skinnedMesh
              name="Cube006_5"
              geometry={nodes.Cube006_5.geometry}
              material={materials["Material.021"]}
              skeleton={nodes.Cube006_5.skeleton}
            />
            <skinnedMesh
              name="Cube006_6"
              geometry={nodes.Cube006_6.geometry}
              material={materials["Material.020"]}
              skeleton={nodes.Cube006_6.skeleton}
            />
            <skinnedMesh
              name="Cube006_7"
              geometry={nodes.Cube006_7.geometry}
              material={materials["Material.018"]}
              skeleton={nodes.Cube006_7.skeleton}
            />
            <skinnedMesh
              name="Cube006_8"
              geometry={nodes.Cube006_8.geometry}
              material={materials["Material.016"]}
              skeleton={nodes.Cube006_8.skeleton}
            />
            <skinnedMesh
              name="Cube006_9"
              geometry={nodes.Cube006_9.geometry}
              material={materials["Material.007"]}
              skeleton={nodes.Cube006_9.skeleton}
            />
            <skinnedMesh
              name="Cube006_10"
              geometry={nodes.Cube006_10.geometry}
              material={materials["Material.008"]}
              skeleton={nodes.Cube006_10.skeleton}
            />
            <skinnedMesh
              name="Cube006_11"
              geometry={nodes.Cube006_11.geometry}
              material={materials["Material.011"]}
              skeleton={nodes.Cube006_11.skeleton}
            />
            <skinnedMesh
              name="Cube006_12"
              geometry={nodes.Cube006_12.geometry}
              material={materials["Material.013"]}
              skeleton={nodes.Cube006_12.skeleton}
            />
            <skinnedMesh
              name="Cube006_13"
              geometry={nodes.Cube006_13.geometry}
              material={materials["Material.014"]}
              skeleton={nodes.Cube006_13.skeleton}
            />
            <skinnedMesh
              name="Cube006_14"
              geometry={nodes.Cube006_14.geometry}
              material={materials["Material.015"]}
              skeleton={nodes.Cube006_14.skeleton}
            />
            <skinnedMesh
              name="Cube006_15"
              geometry={nodes.Cube006_15.geometry}
              material={materials["Material.012"]}
              skeleton={nodes.Cube006_15.skeleton}
            />
            <skinnedMesh
              name="Cube006_16"
              geometry={nodes.Cube006_16.geometry}
              material={materials["Material.010"]}
              skeleton={nodes.Cube006_16.skeleton}
            />
            <skinnedMesh
              name="Cube006_17"
              geometry={nodes.Cube006_17.geometry}
              material={materials["Material.009"]}
              skeleton={nodes.Cube006_17.skeleton}
            />
            <skinnedMesh
              name="Cube006_18"
              geometry={nodes.Cube006_18.geometry}
              material={materials["Material.004"]}
              skeleton={nodes.Cube006_18.skeleton}
            />
            <skinnedMesh
              name="Cube006_19"
              geometry={nodes.Cube006_19.geometry}
              material={materials["Material.017"]}
              skeleton={nodes.Cube006_19.skeleton}
            />
            <skinnedMesh
              name="Cube006_20"
              geometry={nodes.Cube006_20.geometry}
              material={materials["Material.019"]}
              skeleton={nodes.Cube006_20.skeleton}
            />
            <skinnedMesh
              name="Cube006_21"
              geometry={nodes.Cube006_21.geometry}
              material={materials["Material.025"]}
              skeleton={nodes.Cube006_21.skeleton}
            />
            <skinnedMesh
              name="Cube006_22"
              geometry={nodes.Cube006_22.geometry}
              material={materials.Material}
              skeleton={nodes.Cube006_22.skeleton}
            />
            <skinnedMesh
              name="Cube006_23"
              geometry={nodes.Cube006_23.geometry}
              material={materials["Material.023"]}
              skeleton={nodes.Cube006_23.skeleton}
            />
          </group>
          <primitive object={nodes.spine} />
          <primitive object={nodes.neutral_bone} />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("models/kiki.glb");
