import React, { Component } from 'react';
import './styles.scss';
import Icons from '../Icons/index';

class Contact extends Component {

  render() {
    return (
      <div className='contact-info'>
        <div className='contact-left'>
          <h3>Say Hello!</h3>
        </div>
        <div className='contact-right'>
          <div className='contact-body'>
            <p>Software Engineer based in Los Angeles, CA.</p>
            <p>Comments, suggestions, or inquiries?</p>
            <p>Feel welcome to contact me at j4chou@gmail.com!</p>
          </div>
          <div className='contact-right-subhead'>
            <h4>Connect with Me</h4>
          </div>
          <Icons />
        </div>
      </div>
    );
  }
}

export default Contact;