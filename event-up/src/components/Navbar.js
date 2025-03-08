import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase';

const Navbar = ({ user }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">Event-up</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">Contact</Link>
          </li>
          {user && (
            <li className="nav-item">
              <Link className="nav-link" to="/profile">Profile</Link>
            </li>
          )}
        </ul>
        <ul className="navbar-nav ml-auto">
          {user ? (
            <li className="nav-item">
              <button className="btn btn-link nav-link" onClick={() => auth.signOut()}>Logout</button>
            </li>
          ) : (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/signup">Signup</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;