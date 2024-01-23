import React, { useState } from 'react';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import Navbar from './Navbar.jsx';
import "../index.scss";
import Footer from './Footer.jsx';




const SignIn = () => {
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");

    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) =>{
           // console.log(userCredential);
           const user = userCredential.user;
           alert('Login successful! Welcome');
         
           
           window.location.href = '/#/quiz';
        }).catch((error) => {
            console.log(error);
        })
    }
    return (
        <div className='styled'>
               <div className="nav"> <Navbar /></div>
             <h2>Sign In</h2>
            <form className='forms' onSubmit={signIn}>
                <div className='formDiv'>
                <label>Email</label><br></br>
                <input 
                    type="email"              
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    ></input> <br></br>
                    <label>Password</label><br></br>
                <input 
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                ></input><br></br>
                <button type="submit">Log In</button>
                </div>
            </form>
            <p>If you don't have an account <a className="button button3"href="/#/signup">Sign Up</a> </p>
            
            <Footer />
        </div>
    );

    
};

export default SignIn;

/*
import React, { useState, useEffect } from 'react';
import { auth, firestore } from '../firebase';
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';


const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isUserOnline, setIsUserOnline] = useState(false);

  useEffect(() => {
    // Set up an observer to update user presence when it changes
    const authStateChange = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userDocRef = doc(firestore, 'users', user.uid);
        const userDoc = await getDoc(userDocRef);
        const userData = userDoc.data();
        setIsUserOnline(userData?.online || false);
      }
    });

    // Clean up the observer when the component unmounts
    return () => {
      authStateChange();
    };
  }, []); // Run this effect only once on component mount

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        alert('Login successful! Welcome');

        window.location.href = '/quiz';
      }).catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className='sign-in-container'>
      <form onSubmit={signIn}>
        <h1>Log In</h1>
        <p>{isUserOnline ? 'User is online' : 'User is offline'}</p>
        <input
          type="email"
          placeholder='Enter your email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          type="password"
          placeholder='Enter your password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default SignIn;
*/