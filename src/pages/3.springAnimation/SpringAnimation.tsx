import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls,ContactShadows } from "@react-three/drei";
import * as THREE from "three";
import { Carousel } from "./components/Carousel";
import { Depth, LayerMaterial, Noise } from "lamina";
import { useRef } from "react";
import { Mesh } from "three";
const BG_SPEED=0.3
const Background = () => {
  const ref = useRef<Mesh>(null!);

  useFrame((_state, delta) => {
    ref.current.rotation.x =
      ref.current.rotation.y =
      ref.current.rotation.z +=
        delta * BG_SPEED;
  });

  return (
    <mesh scale={100} ref={ref}>
      <sphereGeometry args={[1, 64, 64]} />
      <LayerMaterial side={THREE.BackSide}>
        <Depth
          colorA="#f21a62"
          colorB="#0081fc"
          alpha={1}
          mode="normal"
          near={130}
          far={200}
          origin={[100, 100, -100]}
        />
        <Noise
          mapping="local"
          type="white"
          scale={100}
          colorA="white"
          colorB="black"
          mode="subtract"
          alpha={0.42}
        />
      </LayerMaterial>
    </mesh>
  );
};

export const SpringAnimation = () => {
  return (
    <div className="page">
      <Canvas shadows camera={{ position: [0, 16, 42], fov: 30 }}>
      <color attach="background" args={["#ececec"]} />
      <OrbitControls />

      <ambientLight intensity={0.8} />
      <directionalLight position={[0, 20, 20]} intensity={1} />

      <Carousel />
      <ContactShadows scale={30} opacity={0.32} />

      <Background />
    </Canvas>
      
    </div>
  );
};
