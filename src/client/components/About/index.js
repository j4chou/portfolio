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
          <ul>
            <li>Graduate of UC San Diego Class of 2015</li>
            <li>Motivated web developer who is always trying to learn more</li>
            <li>Some activities I do for fun:
                <ul>
                  <li>Looking for top-rated books to read (and reading them)</li>
                  <li>Trying recipes with a reasonable amount of ingredients</li>
                  <li>Rewatching Studio Ghibli films</li>
                  <li>Searching for what's hot on Yelp to plan food adventures</li>
                </ul>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default About;