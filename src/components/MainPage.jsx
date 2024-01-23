// MainPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'
import "../index.scss";
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';



const MainPage = () => {
  return (
    <div className="styled">
<div className="nav"> <Navbar /></div>
      <h1>Welcome to Quizzers</h1>
      <div className="button-container">
   
      <p>
      <img src="src/quizzersLogo-2.png" alt="Logo"/>
        </p>

      <a className="button button1"href="/QuizApp/#/signin">Sign In</a> 
      <a className="button button2" href="/QuizApp/#/signup">Sign Up</a>

      </div>

      <Footer />
    </div>
  );
};

export default MainPage;