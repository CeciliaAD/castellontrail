import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <nav>
      <ul className="footer">
        <Link to="/">
        <li>CASTELLÓN TRAIL</li>
        </Link>
        <li>Benicàssim, España</li>
        <Link to="/acerca">
        <li>Acerca de nosotros</li>
        </Link>
        <Link to="/contactar">
        <li>Contactar</li>
        </Link>
        <li>Desarrollado por CeciliaAD <a href="https://github.com/CeciliaAD">https://github.com/CeciliaAD</a></li>
      </ul>
    </nav>
  );
}
export default Footer;
