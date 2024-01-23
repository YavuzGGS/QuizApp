// MainPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'
import "../index.scss";
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import quizzersLogo from '../quizzersLogo-2.png';
import { auth } from '../firebase';

const MainPage = () => {
  const user = auth.currentUser;
  return (
    <div className="styled">
<div className="nav"> <Navbar /></div>
      <h1>Welcome to Quizzers</h1>
      <div className="button-container">
   
      <p>
      <img src={quizzersLogo} alt="Logo" />
        </p>

        {user ? (
          // If a user is logged in, show a different UI (e.g., a logout button)
          <Link to="/QuizApp/#/logout" className="button button1">
            Logout
          </Link>
        ) : (
          // If no user is logged in, show the sign-in and sign-up buttons
          <>
            <Link to="/QuizApp/#/signin" className="button button1">
              Sign In
            </Link>
            <Link to="/QuizApp/#/signup" className="button button2">
              Sign Up
            </Link>
          </>
        )}

      </div>

      <Footer />
    </div>
  );
};

export default MainPage;