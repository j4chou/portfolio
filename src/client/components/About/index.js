import React, { Component } from 'react';

import './../../styles/base.scss';
import './styles.scss';

class About extends Component {
  render() {
    return (
      <div className="about content">
        <h1>Get to know me</h1>
        <div className="picture">
        </div>
        <div className="about-me">
          <p>Maybe I can list interesting facts about myself and 
          talk about my journey to becoming a web developer.
          Love the challenges of development.
          Talk about hobbies/activities.
          Goals.
          </p>
        </div>
      </div>
    );
  }
}

export default About;