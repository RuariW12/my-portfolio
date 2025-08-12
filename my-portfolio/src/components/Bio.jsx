import React from 'react';
import { motion } from 'framer-motion';
import '../styles/bio.css';

function Bio() {
  return (
    <section id="bio">
    <div className='bio-container'>
      <motion.div 
        className='bio-left'
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        viewport={{ amount: 0.2 }} 
      >
        <h1 className='bio-header'>Welcome</h1>

        <p className='bio-para-header'>
          Ruari Whalen | E-portfolio | Business IT, Cloud, ML, Data Science, Full-Stack
        </p>

        <p className='bio-para'>
          &#10148; Hi, I’m Ruari Whalen. I'm a Business Information Technology student at Virginia Tech.
        </p>
        <p className='bio-para'>
          &#10148; I specialize in Cloud Solutions, DevOps, and Data Science. My skill set also includes Cybersecurity, Networking, Full-stack web
          development, and Machine Learning.
        </p>
        <p className='bio-para'>
          &#10148; I’m passionate about building smart, scalable solutions and am always seeking new
          opportunities to learn, improve, and apply my skills in meaningful ways.
        </p>
      </motion.div>
    </div>
    </section>
  );
}

export default Bio;
