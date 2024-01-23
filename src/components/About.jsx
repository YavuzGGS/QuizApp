
import React from 'react';
import Navbar from './Navbar';
import "../index.scss";
import Footer from './Footer';
import { uploadQuestions } from '../firebase';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

<head>
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0"
    />
    <title>Your React App</title>
  </head>

const About = () => {
    //uploadQuestions();
    return (
        <div className='styled'>


            <div className="nav"> <Navbar /></div>
          <header>
            <h1>About Us</h1>
          </header>
    <div className='aboutUs'>
    <p>
          Welcome to our quiz application! This application is designed to test your knowledge on various topics. QuizGenius is designed to test your knowledge on various topics. Our mission is to being the best app on this area
        </p>
        <p>
        Founded in 2024. We started with a passion for solving questions, and our commitment to learning has been the driving force behind everything we do. Our team is occured by 3 person. We are a good team and we are in communicate all time
        </p>
        
            <p>We love hearing from our community! If you have any questions, suggestions, or just want to say hello, feel free to reach out to us at <a href="mailto:sahiny@email.com">sahiny@email.com</a> or send your comment on the <a href='/contact'>contact </a>page</p>

          </div>
         <Footer />
        
        </div>
       
      );
    };
    
    export default About;




