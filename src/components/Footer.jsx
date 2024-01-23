// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'
import "../index.scss";
import { auth } from '../firebase';




const Footer = () => {
  return (
    <nav className="footer">
  <hr></hr>
      <footer>
            <p>Thank you for being a part of the Quizzers journey!</p>
            <address>
              QuizGenius
              Huzur Mah. Maslak
              +90 534 747 29 53
            </address>
          </footer>

     
    </nav>

  );
};

export default Footer;
