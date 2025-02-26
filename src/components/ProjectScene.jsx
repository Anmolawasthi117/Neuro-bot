// src/components/ProjectScene.jsx
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei"; // Optional for debugging
import VortexTunnel from "./VortexScene";

function ProjectScene({ projects }) {
  return (
    <Canvas
      style={{ height: "100vh" }}
      camera={{ position: [0, 0, 10], fov: 60 }}
    >
      {/* Optional: OrbitControls for testing—remove later */}
      <OrbitControls enableZoom={false} enablePan={false} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <VortexTunnel projects={projects} />
    </Canvas>
  );
}

export default ProjectScene;