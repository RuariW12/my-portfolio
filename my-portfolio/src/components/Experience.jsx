import React from 'react';
import { motion } from 'framer-motion';
import '../styles/exp.css';
import certifications from '../data/certifications.json';
import education from '../data/education.json';
import experience from '../data/experience.json';
import ExperienceCard from './ExperienceCard';

function Experience() {
  return (
    <section id="experience">
    <motion.div 
      className="bio-left"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      viewport={{ amount: 0.2 }}
    >
      <h1 className="exp-header">Experience</h1>

      <ExperienceCard title="Education" items={education} />
      <ExperienceCard title="Professional Experience" items={experience} />
      <ExperienceCard title="Certifications" items={certifications} />
    </motion.div>
    </section>
  );
}

export default Experience;
