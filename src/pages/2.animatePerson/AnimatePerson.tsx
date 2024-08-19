import { Canvas } from "@react-three/fiber";
import "./page.css";
import { Hawkins } from "./components/Hawkins";
import { OrbitControls } from "@react-three/drei";
export const AnimatePerson = () => {
  return (
    <div className="page">
      <Canvas>
        <ambientLight intensity={1}></ambientLight>
        <OrbitControls ></OrbitControls>
        <Hawkins position={[0,-3,0]} scale={2.5} />
      </Canvas>
    </div>
  );
};
