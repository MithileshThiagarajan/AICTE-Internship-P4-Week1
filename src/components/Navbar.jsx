import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">BB</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/dashboard">Dashboard</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/budgets">Budgets</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/reports">Reports</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/settings">Settings</Link>
            </li>
          </ul>
          <div className="d-flex">
            <Link className="btn btn-outline-success me-2" to="/signin">Sign In</Link>
            <Link className="btn btn-success" to="/signup">Sign Up</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;