import React from 'react';
import Bio from '../components/Bio.jsx';
import Projects from '../components/Projects.jsx';
import Skills from '../components/Skills.jsx';
import  Experience from '../components/Experience.jsx';
import Footer from '../components/Footer.jsx';
import '../styles/home.css';

function Home() {
  return (
    <main>
      <section id="home">
        <Bio />
        <Projects />
        <Skills />
        <Experience />
        <Footer />
      </section>
    </main>
  );
}

export default Home;
