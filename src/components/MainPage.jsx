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
      <h1>Welcome to QuizGenius</h1>
      <div className="button-container">
   
      <p>
      <img src="src/quizTime-2.png" alt="Logo"/>
        </p>

      <a className="button button1"href="/signin">Sign In</a> 
      <a className="button button2" href="/signup">Sign Up</a>

      </div>

      <Footer />
    </div>
  );
};

export default MainPage;