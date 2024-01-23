import React, { useEffect } from 'react';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleLogout = async () => {
      try {
        await signOut(auth);
        alert('Logout successful!');
        
        // Redirect to the login page using the navigate function
        navigate('./signin');
      } catch (error) {
        console.error('Error during logout:', error);
      }
    };

    handleLogout();
  }, [navigate]);

  return (
    <div>
      <h1>Logging Out...</h1>
      {/* You can add a loading spinner or any other UI element here */}

    </div>
  );
};

export default Logout;
