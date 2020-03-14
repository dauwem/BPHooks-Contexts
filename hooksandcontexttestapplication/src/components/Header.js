import React from 'react';
import { Link } from '@reach/router';

// assets/css
import '../assets/css/Header.scss';

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/state">State</Link>
          </li>
          <li>
            <Link to="/effect">Effect</Link>
          </li>
          <li>
            <Link to="/custom">Custom</Link>
          </li>
          <li>
            <Link to="/composition">Composition</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;