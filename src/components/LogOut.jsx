import React, { useEffect } from 'react';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import Footer from './Footer';

const Logout = () => {
  useEffect(() => {
    const handleLogout = async () => {
      try {
        await signOut(auth);
        alert('Logout successful!');
        // Redirect to the login page or any other desired page :/
        window.location.href = '/#/signin';
      } catch (error) {
        console.error('Error during logout:', error);
      }
    };

    handleLogout();
  }, []);

  return (
    <div>
      <h1>Logging Out...</h1>
      {/* You can add a loading spinner or any other UI element here */}

      <Footer />
    </div>
  );
};

export default Logout;
