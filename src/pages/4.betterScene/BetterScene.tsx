import { Canvas } from "@react-three/fiber";
import "./page.css";
import { OrbitControls } from "@react-three/drei";
export const BetterScene = () => {
  return (
    <div className="page">
      <Canvas>
        <ambientLight intensity={1}></ambientLight>
        <OrbitControls ></OrbitControls>
      </Canvas>
    </div>
  );
};
