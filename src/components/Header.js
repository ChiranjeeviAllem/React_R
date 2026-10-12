import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <header className="site-header">
    <Link className="site-brand" to="/">
      React R
    </Link>
    <nav className="site-navigation" aria-label="Main navigation">
      <Link className="navigation-link" to="/">
        Home
      </Link>
      <Link className="navigation-link" to="/about">
        About
      </Link>
    </nav>
    <div className="header-actions">
      <Link className="navigation-link" to="/cart">
        Cart
      </Link>
      <Link className="login-link" to="/login">
        Login
      </Link>
    </div>
  </header>
);

export default Header;
