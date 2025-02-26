import { Canvas } from '@react-three/fiber';
import VortexContent from './VortexContent';
import projectData from '../utils/projectData.json';

function VortexScene() {
  return (
    <Canvas camera={{ position: [0, 0, 0], fov: 75 }}>
      <VortexContent projectData={projectData} />
    </Canvas>
  );
}

export default VortexScene;