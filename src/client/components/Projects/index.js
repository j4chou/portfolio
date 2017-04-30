import React from 'react';
import { projectList } from './../../utils/projectData.js';

import './styles.scss';

const Projects = () =>  {
  return (
    <div className="content">
      {
        projectList.map(project => {
          return (
            <div className="project-list" key={project.title}>
              <a href={project.url} key={project.title}>
                <img src={project.imagePath} alt={project.title} className="project-img" />
              </a>
              <div className="project-description">
                <div className="description-text">
                  <h4>{project.title}</h4>
                  <p>{project.summary}</p>
                  <p>{project.tech}</p>
                </div>
              </div>
            </div>
          );
        })
      }
    </div>
  );
}

export default Projects;