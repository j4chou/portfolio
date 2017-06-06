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
              <li>My parents immigrated from Vietnam and Taiwan</li>
              <li>Graduate of UC San Diego Class of 2015</li>
              <li>Passionate JavaScript developer who loves a challenge</li>
              <li>Huge tea and coffee addict</li>
              </ul>
            <h2>What are my hobbies?</h2>
              <ul>
                <li>Searching for top-rated books to read</li>
                <li>Rock climbing at a gym</li>
                <li>Playing different types of games (console, board, card, etc.)</li>
                <li>Expanding my knowledge, whether it be learning new technologies or about other topics like investing</li>
                <li>Cooking recipes with a reasonable list of ingredients</li>
              </ul>
            <h2>Fun Facts</h2>
              <ul>
                <li>I <i>love</i> all-you-can-eat Korean barbecue/sushi/hotpot restaurants, and buffets</li>
                <li>I was present at a local restaurant when it got robbed at gunpoint</li>
                <li>I was the first in my (extended) family to graduate college</li>
                <li>I have a certified typing speed of 101 WPM with 100% accuracy (5 minute test)</li>
              </ul>
          </ul>
        </div>
      </div>
    );
  }
}

export default About;