import React from 'react';
import { motion } from 'framer-motion';
import '../styles/footer.css';

function Bio() {
  return (
    <section id="contact">
    
      <motion.div 
        className='bio-left'
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        viewport={{ amount: 0.2 }} 
      >
        <div className='contact-footer'>
            <div className='left-footer'>
                Contact
            </div>
            <div className='right-footer'>
                <a href="mailto:ruariw@vt.edu" className="email-link">
                    <p className='email-link'>ruariw@vt.edu</p>
                </a>
                <a href="https://github.com/RuariW12" className="github-link" target="_blank" rel="noopener noreferrer">
                    GitHub
                </a>
                <a href="https://www.linkedin.com/in/ruari-whalen-102633326/" className="linkedin-link" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                </a>
            </div>
        </div>
      </motion.div>
    
    </section>
  );
}

export default Bio;
