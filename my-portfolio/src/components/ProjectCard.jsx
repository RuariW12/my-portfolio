import React from 'react';
import '../styles/projectCard.css';

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <h3 className="proj-title">{project.title}</h3>
      <p className="proj-desc">{project.description}</p>

      {project.images && project.images.length > 0 && (
        <div className="image-gallery">
          {project.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Screenshot ${index + 1}`}
              className="project-image"
            />
          ))}
        </div>
      )}

      <div className="tech-tags">
        {project.tech.map((item, idx) => (
          <span key={idx} className="tech-pill">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default ProjectCard;
