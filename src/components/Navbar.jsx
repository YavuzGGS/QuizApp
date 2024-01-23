// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'
import "../index.scss";
import { auth } from '../firebase';
import AuthDetails from './AuthDetails';

const Navbar = () => {
  const user = auth.currentUser;

  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/weather">Weather</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        {user && (
          <li>
            <Link to="/quiz">Quiz</Link>
          </li>
        )}
        <li>
          {user ? (
            <Link to="/logout">Log Out</Link>
          ) : (
            <Link to="/signin">Sign In</Link>
          )}
        </li>
        <ul className='authDetail'>
           <li>
          <AuthDetails />
        </li></ul>
        </ul>

  
    </nav>
  );
};

export default Navbar;