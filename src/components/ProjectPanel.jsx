import { motion } from 'framer-motion';

function ProjectPanel({ project }) {
  // Fallback if project is undefined
  if (!project) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        style={{
          position: 'absolute',
          background: 'rgba(0, 0, 0, 0.8)',
          color: 'cyan',
          padding: '1rem',
          borderRadius: '8px',
          maxWidth: '300px',
        }}
      >
        <p style={{ fontStyle: 'italic', color: '#aaa' }}>No project data available</p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      style={{
        position: 'absolute',
        background: 'rgba(0, 0, 0, 0.8)',
        color: 'cyan',
        padding: '1rem',
        borderRadius: '8px',
        maxWidth: '300px',
      }}
    >
      <h3>{project.title || 'Untitled'}</h3>
      <p>{project.description || 'No description'}</p>
      {project.image && !project.video ? (
        <img src={project.image} alt={project.title || 'Image'} style={{ maxWidth: '100%', height: 'auto', borderRadius: '4px' }} />
      ) : project.video && !project.image ? (
        <video src={project.video} controls style={{ maxWidth: '100%', height: 'auto', borderRadius: '4px' }} />
      ) : project.image && project.video ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <img src={project.image} alt={project.title || 'Image'} style={{ maxWidth: '100%', height: 'auto', borderRadius: '4px' }} />
          <video src={project.video} controls style={{ maxWidth: '100%', height: 'auto', borderRadius: '4px' }} />
        </div>
      ) : (
        <p style={{ fontStyle: 'italic', color: '#aaa' }}>No media available</p>
      )}
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {(project.tech || []).map((tech) => (
          <li key={tech} style={{ margin: '0.2rem 0' }}>• {tech}</li>
        ))}
      </ul>
    </motion.div>
  );
}

export default ProjectPanel;