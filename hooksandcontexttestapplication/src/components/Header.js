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
            <Link to="/state-hook">useState</Link>
          </li>
          <li>
            <Link to="/effect-hook">useEffect</Link>
          </li>
          <li>
            <Link to="/custom-hook">useCustom</Link>
          </li>
          <li>
            <Link to="/composition">Composition</Link>
          </li>
          <li>
            <Link to="/context">Context</Link>
          </li>
          <li>
            <Link to="/context-hook">useContext</Link>
          </li>
          <li>
            <Link to="/reducer-hook">useReducer</Link>
          </li>
          <li>
            <Link to="/callback-hook">useCallback</Link>
          </li>
          <li>
            <Link to="/memo-hook">useMemo</Link>
          </li>
          <li>
            <Link to="/ref-hook">useRef</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;