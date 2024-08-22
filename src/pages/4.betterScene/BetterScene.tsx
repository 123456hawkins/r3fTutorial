import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, ContactShadows } from "@react-three/drei";
import * as THREE from "three";
import { Carousel } from "./components/Carousel";
import { Depth, LayerMaterial, Noise } from "lamina";
import { useRef } from "react";
import { Mesh } from "three";
import { Bloom, DepthOfField, EffectComposer, Scanline, Vignette } from "@react-three/postprocessing";
import { Leva, useControls } from "leva";
const BG_SPEED = 0.3;
const Background = () => {
  const ref = useRef<Mesh>(null!);

  useFrame((_state, delta) => {
    ref.current.rotation.x = ref.current.rotation.y = ref.current.rotation.z += delta * BG_SPEED;
  });

  return (
    <mesh scale={100} ref={ref}>
      <sphereGeometry args={[1, 64, 64]} />
      <LayerMaterial side={THREE.BackSide}>
        <Depth colorA="#f21a62" colorB="#0081fc" alpha={1} mode="normal" near={130} far={200} origin={[100, 100, -100]} />
        {/* <Noise mapping="local" type="white" scale={100} colorA="white" colorB="black" mode="subtract" alpha={0.42} /> */}
      </LayerMaterial>
    </mesh>
  );
};

export const BetterScene = () => {
  const { focusDistance, focalLength, bokehScale, height, scanlineDensity } = useControls({
    focusDistance: {
      min: 0,
      max: 1,
      value: 0,
    },
    focalLength: {
      min: 0,
      max: 2,
      value: 0.2,
    },
    bokehScale: {
      min: 0,
      max: 10,
      value: 4.2,
    },
    height: {
      min: 0,
      max: 1024,
      value: 480,
    },
    scanlineDensity: {
      min: 0,
      max: 4,
      value: 0.42,
    },
  });
  return (
    <div className="page">
      <Canvas shadows camera={{ position: [0, 16, 42], fov: 30 }}>
        <color attach="background" args={["#ececec"]} />
        <OrbitControls />

        <ambientLight intensity={0.8} />
        <directionalLight position={[4, 5, 6]} intensity={0.8} color={"#08f9b7"} />

        <directionalLight position={[-4, 5, 6]} intensity={0.8} color={"#931cff"} />

        <Carousel />
        <ContactShadows scale={30} opacity={0.32} />

        <Background />
        <EffectComposer>
          <DepthOfField focusDistance={focusDistance} focalLength={focalLength} bokehScale={bokehScale} height={height} />
          <Bloom mipmapBlur luminanceThreshold={1} intensity={2.4} />
          <Vignette offset={0.3} darkness={0.6} />
          <Scanline density={scanlineDensity} opacity={0.1} />
        </EffectComposer>
      </Canvas>
    </div>
  );
};
