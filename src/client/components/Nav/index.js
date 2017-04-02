import React from 'react';
import { Link } from 'react-router';
import './styles.scss';

const Nav = () => {
  const links = [
    { path: '/about', text: 'About' },
    { path: '/projects', text: 'Projects' },
    { path: '/contact', text: 'Contact' }
  ];

  return (
    <div className="navigation">
     <ul>
      {
        links.map( link => {
          const path = window.location.pathname.toLowerCase();
          let linkClass = 'nav-link';

          if (path.includes(link.path)) linkClass += ' nav-link-active';
          return (
            <li className={linkClass} key={link.text}>
              <Link to={link.path}>{link.text}</Link>
            </li>
          );
        })
      }
     </ul>
    </div>
  );
}

export default Nav;