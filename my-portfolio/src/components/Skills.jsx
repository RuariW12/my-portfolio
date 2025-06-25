import React from 'react';
import { motion } from 'framer-motion';
import '../styles/skills.css';

function Skills() {
  return (
    <section id="skills">
      <motion.section
        className="proj-container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ amount: 0.2 }}
      >
        <h1 className="skills-header">Skills</h1>

        {/* Data Science & Analysis */}
        <h2 className="subheader">Data Science & Analysis</h2>
        <div className="skills-grid">

          <div className="skillCard">
            <img className="logo" src="/logos/excel.png" alt="excel" />
            <p className="skillTitle">Excel</p>
            <li className="subskills">Cleaning</li>
            <li className="subskills">Data Manipulation</li>
          </div>

          <div className="skillCard">
            <img className="logo" src="/logos/python.png" alt="Python" />
            <p className="skillTitle">Python</p>
            <li className="subskills">Pandas</li>
            <li className="subskills">Jupyter</li>
            <li className="subskills">BeautifulSoup</li>
          </div>

          <div className="skillCard">
            <img className="logo" src="/logos/R.png" alt="R" />
            <p className="skillTitle">R</p>
            <li className="subskills">ggplot2</li>
            <li className="subskills">dplyr</li>
          </div>

          <div className="skillCard">
            <img className="logo" src="/logos/SQL1.png" alt="SQL" />
            <p className="skillTitle">SQL</p>
            <li className="subskills">NoSQL</li>
            <li className="subskills">SQLite</li>
          </div>

          <div className="skillCard">
            <img className="logo" src="/logos/powerbi.png" alt="Power BI" />
            <p className="skillTitle">Power BI </p>
            <li className="subskills">Interactive</li>
            <li className="subskills">Storytelling</li>
          </div>

          <div className="skillCard">
            <img className="logo" src="/logos/tabl.png" alt="Tableau" />
            <p className="skillTitle">Tableau</p>
            <li className="subskills">Interactive</li>
            <li className="subskills">Storytelling</li>
          </div>

        </div>

        {/* Cloud & DevOps */}
        <h2 className="subheader">Cloud & DevOps</h2>
        <div className="skills-grid">
          <div className="skillCard">
            <img className="logo" src="/logos/aws.png" alt="AWS" />
            <p className="skillTitle">AWS</p>
          </div>

          <div className="skillCard">
            <img className="logo" src="/logos/azure.png" alt="azure" />
            <p className="skillTitle">Microsoft Azure</p>
          </div>

          <div className="skillCard">
            <img className="logo" src="/logos/googleCloud.png" alt="google-cloud" />
            <p className="skillTitle">Google Cloud</p>
          </div>

          <div className="skillCard">
            <img className="logo" src="/logos/git.png" alt="Git" />
            <p className="skillTitle">Git</p>
          </div>
        </div>

        {/* Full-Stack Web Development */}
        <h2 className="subheader">Full-Stack Web Development</h2>
        <div className="skills-grid">
          <div className="skillCard">
            <img className="logo" src="/logos/html3.png" alt="HTML5" />
            <p className="skillTitle">HTML5</p>
          </div>

          <div className="skillCard">
            <img className="logo" src="/logos/css3.png" alt="CSS" />
            <p className="skillTitle">CSS</p>
          </div>

          <div className="skillCard">
            <img className="logo" src="/logos/js2.png" alt="JavaScript" />
            <p className="skillTitle">JavaScript</p>
          </div>

          <div className="skillCard">
            <img className="logo" src="/logos/react.png" alt="React" />
            <p className="skillTitle">React</p>
          </div>
        </div>

        {/* Cybersecurity */}
        <h2 className="subheader">Cybersecurity</h2>
        <div className="skills-grid">
          <div className="skillCard">
            <img className="logo" src="/logos/kali.png" alt="Kali Linux" />
            <p className="skillTitle">Kali Linux</p>
            <li className="subskills">Ethical Hacking</li>
            <li className="subskills">Network Security</li>
          </div>

          <div className="skillCard">
            <img className="logo" src="/logos/cloudsec.png" alt="Cloud Security" />
            <p className="skillTitle">Cloud Security</p>
            <li className="subskills">AWS</li>
            <li className="subskills">Azure</li>
            <li className="subskills">Google Cloud</li>
          </div>

          <div className="skillCard">
            <img className="logo" src="/logos/lock.png" alt="Security" />
            <p className="skillTitle">Security</p>
            <li className="subskills">MFA Setup</li>
            <li className="subskills">SIEM</li>
          </div>
        </div>

        {/* Soft Skills */}
        <h2 className="subheader">Soft Skills</h2>
        <div className="skills-grid">
          <div className="skillCard">
            <img className="logo" src="/logos/linux.png" alt="Linux" />
            <p className="skillTitle">Linux</p>
            <li className="subskills">Arch</li>
            <li className="subskills">Ubuntu | Mint</li>
            <li className="subskills">Kali</li>
          </div>

          <div className="skillCard">
            <img className="logo" src="/logos/vscode.png" alt="VS Code" />
            <p className="skillTitle">VScode</p>
          </div>

          <div className="skillCard">
            <img className="logo" src="/logos/github.png" alt="GitHub" />
            <p className="skillTitle">GitHub</p>
          </div>
        </div>
      </motion.section>
    </section>
  );
}

export default Skills;
