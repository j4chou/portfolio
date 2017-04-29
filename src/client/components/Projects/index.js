import React, { Component } from 'react';
import { projectList } from './../../utils/projectData.js';

console.log('projectList', projectList);

class Projects extends Component {
  render() {
    return (
      <div className="content">
      Projects here
      </div>
    );
  }
}

export default Projects;