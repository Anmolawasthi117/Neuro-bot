import React from 'react';
import OpenCanvas from '../components/OpenCanvas';
import ProjectSCard from '../components/ProjectSCard';
import semulatorData from '../utils/semulatorData.json';

const Semulator = () => {
  const { openCanvas, predefinedProjects } = semulatorData;

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <main className="max-w-5xl mx-auto p-6">
        <h1 className="text-5xl font-orbitron font-bold text-teal-400 mb-12 text-center tracking-wider drop-shadow-md">
          Nurobots Semulator
        </h1>
        <OpenCanvas {...openCanvas} />
        <h2 className="text-4xl font-orbitron font-bold text-blue-400 mb-8 text-center tracking-wide">
          Predefined Projects
        </h2>
        <div className="space-y-8">
          {predefinedProjects.map((project) => (
            <ProjectSCard key={project.id} {...project} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Semulator;