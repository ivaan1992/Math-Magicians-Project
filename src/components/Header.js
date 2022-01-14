import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <Link to="/" className="text-link">Math Magicians</Link>
    <nav>
      <ul className="links">
        <li>
          <Link to="/" className="text-link">Home</Link>
        </li>
        <li>
          <Link to="/Calculator" className="text-link">Calculator</Link>
        </li>
        <li>
          <Link to="/Quote" className="text-link">Quote</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
