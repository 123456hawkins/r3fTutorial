import { OrbitControls, ScrollControls } from "@react-three/drei";
import { Office } from "./Office.tsx";
import { Overlay } from "./Overlay.tsx";
export const Experience = () => {
  return (
    <>
      <OrbitControls enableZoom={false} />
      {/* <mesh>
        <boxGeometry />
        <meshNormalMaterial />
      </mesh> */}
      <ScrollControls pages={3} damping={0.25}>
        <Overlay />
        <Office />
      </ScrollControls>
      <ambientLight intensity={1} />
    </>
  );
};
