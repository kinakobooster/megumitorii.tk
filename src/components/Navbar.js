import React from 'react'
import { Link } from 'gatsby'

const Navbar = () => (
  <nav className="navbar">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          megumitorii.tk
        </Link>
      </div>
      <div className="navbar-start">
      </div>
      <div className="navbar-end" />
    </div>
  </nav>
)

export default Navbar
