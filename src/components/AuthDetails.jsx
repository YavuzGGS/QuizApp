import React, { useEffect, useState } from "react";
import { auth } from '../firebase';
import { onAuthStateChanged } from "firebase/auth";

const AuthDetails = () =>{
    const [authUser, setAuthUser] = useState(null);
    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user){
                setAuthUser(user)
            }else {
                setAuthUser(null);
            }
        });
        return () => {
            listen();
        }
    }, []);
    const userSignOut = () => {
        signOut(auth).then(() =>{
            console.log('sign out successfull');
            window.location.href = '/QuizApp/#/signin';
        }).catch(error => console.log(error))
    }
    return (

            <div>
            
            {authUser ? (
    
                <p>{`Signed In as ${authUser.email}`}</p>
                
                
      
            ) : (
              <p>Signed Out</p>
              
            )}
          </div>
        
            
            

        

      );
    };
    
    export default AuthDetails;