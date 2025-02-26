import { useRef, useEffect } from 'react';
import * as THREE from 'three';
import ProjectPanel from './ProjectPanel';

function ProjectStation({ position, project }) {
  const meshRef = useRef();
  const videoRef = useRef(null);

  useEffect(() => {
    if (project.video && !videoRef.current) {
      const video = document.createElement('video');
      video.src = project.video;
      video.loop = true;
      video.muted = true; // Autoplay requires muted
      video.play();
      videoRef.current = video;
    }
  }, [project.video]);

  return (
    <group position={position}>
      <mesh ref={meshRef}>
        <planeGeometry args={[4, 3]} /> {/* Media size */}
        <meshBasicMaterial
          color="white"
          map={
            project.image
              ? new THREE.TextureLoader().load(project.image)
              : project.video && videoRef.current
              ? new THREE.VideoTexture(videoRef.current)
              : null
          }
          side={THREE.DoubleSide}
        />
      </mesh>
      {/* Hover panel still works */}
      <ProjectPanel project={project} />
    </group>
  );
}

export default ProjectStation;