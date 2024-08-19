import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import "./page.css";
export const ScrollPage = () => {
  return (
    <div className="page">
      <Canvas>
        <Experience />
      </Canvas>
    </div>
  );
};
