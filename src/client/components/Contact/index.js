import React, { Component } from 'react';
import './styles.scss';

class Contact extends Component {

  componentDidMount() {
    console.log('mounting')
  }

  render() {
    return (
      <div className="contact-info">
        <div className="contact-left">
          <p>Say Hello</p>
        </div>
        <div className="contact-right">
          <p>Los Angeles, CA</p>
          <p>j4chou@gmail.com</p>
        </div>
      </div>
    );
  }
}

export default Contact;