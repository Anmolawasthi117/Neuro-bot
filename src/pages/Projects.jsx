import React from 'react';
import projectData from '../utils/projectData.json'; // Adjust path as needed
import ProjectPageCard from '../components/ProjectPageCard';

const Projects = () => {
  return (
    <section className="min-h-screen bg-black py-12 overflow-hidden font-vt323">
      {/* Background with Grid */}
      <div className="relative bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear_gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px]">
        
        {/* Title */}
        <h2 className="text-5xl md:text-7xl text-white text-center mb-12 animate-flicker">
          Our Projects
        </h2>

        {/* Project Grid */}
        <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project) => (
            <ProjectPageCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              tech={project.tech}
              status={project.status}
            />
          ))}
        </div>

        {/* Drifting Bolts for Extra Flair */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-2 h-2 bg-green-400 animate-drift" style={{ left: '15%', animationDelay: '0s' }}></div>
          <div className="absolute w-3 h-3 bg-cyan-400 animate-drift" style={{ left: '35%', animationDelay: '1.5s' }}></div>
          <div className="absolute w-2 h-2 bg-pink-400 animate-drift" style={{ left: '55%', animationDelay: '0.8s' }}></div>
          <div className="absolute w-3 h-3 bg-white animate-drift" style={{ left: '75%', animationDelay: '2s' }}></div>
        </div>
      </div>
    </section>
  );
};

export default Projects;