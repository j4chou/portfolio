import React from 'react';
import Github from './../Github/index';
import Linkedin from './../Linkedin/index';
import './styles.scss';

const Icons = () => {

  const links = [
    { name: 'github',
      path: 'http://www.github.com/j4chou', 
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
    <div className='media-navbar'>
      <ul>
      {
        links.map( link => {
          const IconComponent = IconComponents[link.name];
          return (
            <a href={link.path} key={link.name} className={link.name}>
              <IconComponent />
            </a>
          );
        })
      }
      </ul>
    </div>
  );

}

export default Icons;