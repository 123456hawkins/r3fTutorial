/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { useGLTF } from "@react-three/drei";
import React, { useRef } from "react";

export default function Dog(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/models/springAnimationModel/dog/model.gltf");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh castShadow receiveShadow
        geometry={nodes.character_dog.geometry}
        material={nodes.character_dog.material}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <mesh castShadow receiveShadow
          geometry={nodes.character_dogArmLeft.geometry}
          material={nodes.character_dogArmLeft.material}
          position={[0.2, 0, -0.63]}
        />
        <mesh castShadow receiveShadow
          geometry={nodes.character_dogArmRight.geometry}
          material={nodes.character_dogArmRight.material}
          position={[-0.2, 0, -0.63]}
        />
        <group position={[0, 0, -0.7]}>
          <mesh castShadow receiveShadow
            geometry={nodes.Cube1339.geometry}
            material={nodes.Cube1339.material}
          />
          <mesh castShadow receiveShadow
            geometry={nodes.Cube1339_1.geometry}
            material={materials["Red.034"]}
          />
          <mesh castShadow receiveShadow
            geometry={nodes.Cube1339_2.geometry}
            material={materials["Black.026"]}
          />
        </group>
      </mesh>
    </group>
  );
}

useGLTF.preload("/models/springAnimationModel/dog/model.gltf");
