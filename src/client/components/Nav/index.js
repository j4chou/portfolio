import React from 'react';
import { Link } from 'react-router';
import './styles.scss';

const Nav = () => {
  const links = [
    { path: '/about', text: 'About' },
    { path: '/contact', text: 'Contact' },
    { path: '/projects', text: 'Projects' }
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