import React from 'react';
import { motion } from 'framer-motion';
import ProjectCarousel from './ProjectCarousel';
import '../styles/projects.css';

function Projects() {
  return (
    <section id="projects">
    <motion.section 
      className="proj-container"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ amount: 0.2 }} 
    >
      <h2 className="proj-header">Projects</h2>
      <ProjectCarousel />
    </motion.section>
    </section>
  );
}

export default Projects;
