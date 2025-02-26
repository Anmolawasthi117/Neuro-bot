import { ScrollControls } from '@react-three/drei';
import * as THREE from 'three';
import VortexScroll from './VortexScroll';

function VortexContent({ projectData }) {
  return (
    <>
      {/* Blueprint Tunnel */}
      <mesh>
        <cylinderGeometry args={[10, 10, projectData.length * 20, 32, 1, true]} />
        <meshBasicMaterial
          color="#1a1a2e" // Dark blueprint blue
          opacity={0.1}
          transparent
          side={THREE.DoubleSide}
          wireframe // Blueprint grid
        />
      </mesh>

      {/* Scrollable Content */}
      <ScrollControls pages={projectData.length / 2}>
        <VortexScroll projectData={projectData} />
      </ScrollControls>
    </>
  );
}

export default VortexContent;