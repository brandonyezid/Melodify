import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/assets/logo.png" alt="Melodify Logo" />
        <h2>Melodify</h2>
      </div>
      <form className="search-form">
        <input type="text" placeholder="Buscar canciones, artistas o álbumes" />
        <button type="submit">Buscar</button>
      </form>
    </nav>
  );
};

export default Navbar;
