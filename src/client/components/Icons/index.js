import React from 'react';
import { Link } from 'react-router';
import './styles.scss';
import github from './../../../../public/assets/github.png';
import linkedin from './../../../../public/assets/linkedin.png';

const Icons = () => {
  const links = [
    { name: 'github',
      path: 'http://github.com/j4chou', 
      src: github
     },
    { name: 'linkedin',
      path: 'http://www.linkedin.com/in/jessicachou1/', 
      src: linkedin
    }
  ];

  return (
    <div className="icon-navbar">
      <ul>
      {
        links.map( link => {
          let linkClass = 'icon-nav-link';
          return (
            <Link to={link.path} key={link.name}>
              <img className={linkClass} src={link.src} alt={link.name} />
            </Link>
          );
        })
      }
      </ul>
    </div>
  );
}

export default Icons;