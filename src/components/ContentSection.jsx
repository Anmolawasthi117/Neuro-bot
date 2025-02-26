import React from 'react';
import ProjectCard from './ProjectCard';

const ContentSection = ({ title, description, content, tutorials, projects, realLifeExample }) => {
  return (
    <section className="my-8 p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-3xl font-orbitron font-bold text-blue-400 mb-4">{title}</h2>
      <p className="text-lg font-poppins text-gray-300 mb-6">{description}</p>

      {content && content.length > 0 && (
        <div className="space-y-6">
          {content.map((item, index) => (
            <div key={index} className="space-y-2">
              <h3 className="text-xl font-orbitron text-gray-200">{item.subtitle}</h3>
              <p className="text-base font-poppins text-gray-400">{item.text}</p>
            </div>
          ))}
        </div>
      )}

      {tutorials && tutorials.length > 0 && (
        <div className="mt-6">
          <h3 className="text-xl font-orbitron text-gray-200 mb-2">Tutorials</h3>
          <ul className="list-disc pl-6 space-y-2">
            {tutorials.map((tutorial, index) => (
              <li key={index}>
                <a
                  href={tutorial.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 font-poppins hover:text-blue-300"
                >
                  {tutorial.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {projects && projects.length > 0 && (
        <div className="mt-6">
          <h3 className="text-xl font-orbitron text-gray-200 mb-2">Projects</h3>
          <div className="space-y-4">
            {projects.map((project, index) => (
              <ProjectCard key={index} title={project.title} description={project.description} />
            ))}
          </div>
        </div>
      )}

      {realLifeExample && (
        <div className="mt-6">
          <h3 className="text-xl font-orbitron text-gray-200 mb-2">Real-Life Example</h3>
          <p className="text-base font-poppins text-gray-500 italic">{realLifeExample}</p>
        </div>
      )}
    </section>
  );
};

export default ContentSection;