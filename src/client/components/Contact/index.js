import React, { Component } from 'react';
import './styles.scss';
import Icons from '../Icons/index';

class Contact extends Component {

  render() {
    return (
      <div className="contact-info">
        <div className="contact-left">
          <p>Say Hello</p>
        </div>
        <div className="contact-right">
          <p>Los Angeles, CA</p>
          <p>j4chou@gmail.com</p>
          <Icons />
        </div>
      </div>
    );
  }
}

export default Contact;