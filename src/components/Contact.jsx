// Contact.jsx
import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { firestore } from '../firebase';
import "../index.scss";
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';

const Contact = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [question, setQuestion] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create an object with the submitted data
    const contactData = {
      name,
      surname,
      email,
      question,
    };

    // Add the data to the Firestore collection
    try {
      const docRef = await addDoc(collection(firestore, 'contacts'), contactData);
      console.log('Contact added with ID: ', docRef.id);
      // Optionally, you can reset the form fields after submission
      setName('');
      setSurname('');
      setEmail('');
      setQuestion('');
    } catch (error) {
      console.error('Error adding contact: ', error);
    }
  };

  return (
    <div className='styled'>
         <div className="nav"> <Navbar /></div>
      <h2>Contact Page</h2>
      <form className='forms' onSubmit={handleSubmit}>
      <div className='formDiv'>
        <label>
          Name </label><br></br>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <br />
        <label>
          Surname
          </label><br />
          <input type="text" value={surname} onChange={(e) => setSurname(e.target.value)} />
        <br />
        <label>
          Email </label><br />
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <br />
        <label>
          Comment </label> <br />
          <textarea value={question} onChange={(e) => setQuestion(e.target.value)} />
        <br />
        <button type="submit">Submit</button>
        </div>
      </form>
      <Footer />
    </div>
  );
};

export default Contact;
