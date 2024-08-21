/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { hawkinsMaterials } from "@/utlis/hawkinsmaterials";
import { animated } from "@react-spring/three";
import { useGLTF } from "@react-three/drei";
import React, { useRef } from "react";
export function Mustard(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/models/springAnimationModel/bottle-musterd/model.gltf");
  return (
    <animated.group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.bottleMusterd.geometry}
        material={materials.yellow}
        scale={0.21}
      >
        <meshStandardMaterial {...hawkinsMaterials.yellow} />
      </mesh>
    </animated.group>
  );
}

useGLTF.preload("/models/springAnimationModel/bottle-musterd/model.gltf");
