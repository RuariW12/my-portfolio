import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import projects from '../data/projects.json';
import ProjectCard from './ProjectCard';
import '../styles/projectCarousel.css';

function ProjectCarousel() {
  const [index, setIndex] = useState(0);
  const total = projects.length;

  const next = () => setIndex((prev) => (prev + 1) % total);
  const prev = () => setIndex((prev) => (prev - 1 + total) % total);

  return (
    <div className="carousel-wrapper">
      <button className="arrow-btn" onClick={prev}>←</button>

      <div className="card-animation-container">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <ProjectCard project={projects[index]} />
          </motion.div>
        </AnimatePresence>
      </div>

      <button className="arrow-btn" onClick={next}>→</button>
    </div>
  );
}

export default ProjectCarousel;
