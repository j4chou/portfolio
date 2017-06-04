import React, { Component } from 'react';

import './../../styles/base.scss';
import './styles.scss';

class About extends Component {
  render() {
    return (
      <div className="about content">
        <h1>Get to know me</h1>
        <div className="picture">
          <img src="/assets/me.jpg" />
        </div>
        <div className="about-me">
          <ul>
            <h2>About me</h2>
              <ul>
              <li>Born and raised in Los Angeles, CA</li>
              <li>Graduate of UC San Diego Class of 2015</li>
              <li>Passionate JavaScript developer who loves a challenge</li>
              </ul>
            <h2>What are my hobbies?</h2>
              <ul>
                <li>Searching for top-rated books to read - and reading them</li>
                <li>Cooking recipes with a reasonable list of ingredients</li>
                <li>Rewatching Studio Ghibli films</li>
                <li>Rock climbing (not real rocks, though)</li>
                <li>Planning food adventures with friends & family</li>
              </ul>
            <h2>Interesting(?) Facts</h2>
              <ul>
                <li>I have a certified typing speed of 101 WPM with 100% accuracy (5 minute test)</li>
                <li>I was once present at a restaurant when it was robbed at gunpoint</li>
              </ul>
          </ul>
        </div>
      </div>
    );
  }
}

export default About;