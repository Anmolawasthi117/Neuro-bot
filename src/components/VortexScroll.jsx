import { useFrame } from '@react-three/fiber';
import { useScroll } from '@react-three/drei';
import ProjectStation from './ProjectStation';
import { useRef } from 'react';

function VortexScroll({ projectData }) {
  const scroll = useScroll();
  const groupRef = useRef();

  useFrame((state) => {
    if (scroll && scroll.offset !== undefined && groupRef.current) {
      const speed = scroll.offset * 100; // Fast "running" feel
      groupRef.current.children.forEach((child, index) => {
        child.position.z += speed; // Move toward camera
        if (child.position.z > 50) { // Reset when past camera
          child.position.z = -projectData.length * 10 + (index * 10); // Loop back
        }
      });
    }
  });

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.5} />
      <pointLight position={[0, 0, 10]} color="cyan" intensity={1} />
      {projectData.map((project, index) => (
        <ProjectStation
          key={project.id}
          position={[Math.cos(index) * 8, Math.sin(index) * 8, -index * 10]}
          project={project}
        />
      ))}
    </group>
  );
}

export default VortexScroll;