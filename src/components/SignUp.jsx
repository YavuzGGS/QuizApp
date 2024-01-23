import "../index.scss";
import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, firestore } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import Navbar from './Navbar.jsx';
import Footer from "./Footer.jsx";
const SignUp = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const userAllTimeScore = '0';
  const handleSignUp = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      const usersCollection = collection(firestore, 'users');
      await addDoc(usersCollection, {
        uid: user.uid,
        email: user.email,
        displayName: displayName,
        userAllTimScore: userAppTimScore,

      })

      .then(function(){

        console.log('user registered', displayName);
  
        window.location.href = '#/quiz';
  
        })

      console.log('User signed up:', user);
    } catch (error) {
      console.error('Error signing up:', error.message);
    }
  };

  return (
    <div className="styled">
      <div className="nav"> <Navbar /></div>
     
      <h2>Sign Up</h2>
      <form className="forms">
      <div className="formDiv">
        <label>Email</label><br></br>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} /><br></br>

        <label>Password</label><br></br>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} /><br></br>

        <label>Display Name</label><br></br>
        <input type="text" value={displayName} onChange={(e) => setDisplayName(e.target.value)} /><br></br>

        <button type="button" onClick={handleSignUp}>
          Sign Up
        </button>
        </div>
      </form>
      <p>If you have an account already
      <a className="button button3"href="#/signin">Sign In</a> </p>
      <Footer />
    </div> 
  );
};

export default SignUp;
