import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
export const ScrollPage = () => {
  return (
    <div className="page">
      <Canvas>
        <Experience />
      </Canvas>
    </div>
  );
};
