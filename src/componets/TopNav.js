import React from 'react';
import "./TopNav.css";

const TopNav = () => {
  return (
    <nav className="top-nav">
      <div className="nombre-empresa">HerbCare</div>
      <ul className="nav-links">
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Sobre nosotros</a></li>
        <li><a href="#">Servicios</a></li>
        <li><a href="#">Login</a></li>
      </ul>
    </nav>
  );
}

export default TopNav;