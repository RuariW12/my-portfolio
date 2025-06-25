import React from 'react';

function ExperienceCard({ title, items, className }) {
  return (
    <div className="experience-card">
      <h2 className="card-title">{title}</h2>
      <ul className="card-content">
        {items.map((item, index) => (
          <li key={index} className="card-item">
            <h3 className="item-heading">{item.title}</h3>
            <p className="item-subheading">{item.description}</p>

            {item.Skills && (
              <ul className="skills-list">
                {item.Skills.map((skill, i) => (
                  <li key={i} className="skill-tag">{skill}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExperienceCard;
