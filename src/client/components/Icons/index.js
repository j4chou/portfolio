import React, { Component } from 'react';
import { Link } from 'react-router';
import Github from './../Github/index';
import Linkedin from './../Linkedin/index';
import './styles.scss';

const Icons = () => {

  const links = [
    { name: 'github',
      path: 'http://github.com/j4chou', 
     },
    { name: 'linkedin',
      path: 'http://www.linkedin.com/in/jessicachou1/', 
    }
  ];

  const IconComponents = {
    github: Github,
    linkedin: Linkedin
  }

  return (
    <div className="icon-navbar">
      <ul>
      {
        links.map( link => {
          let linkClass = 'icon-nav-link';
          const IconComponent = IconComponents[link.name];
          return (
            <Link to={link.path} key={link.name}>
              <IconComponent />
            </Link>
          );
        })
      }
      </ul>
    </div>
  );

}

export default Icons;