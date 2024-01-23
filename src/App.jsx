/*import Quiz from "./components/Quiz/Quiz";
import { jsQuizz } from "./constants";
import SignIn from './components/SignIn'
import SignUp from "./components/SignUp";



function App() {

  
  //return <Quiz questions={jsQuizz.questions} />;
  
  return <SignUp/>


}
export default App;*/

// App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import MainPage from './components/MainPage';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Quiz from './Quiz';
import LogOut from './components/LogOut';
import Contact from './components/Contact';
import About from './components/About';
import MapApplication from './components/Weather';

function App() {
  return (
    <BrowserRouter basename={import.meta.env.DEV ? '/' : '/QuizApp/'}>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/" element={<MainPage />} />
        <Route path='/quiz' element={<Quiz />} />
        <Route path='/logout' element={<LogOut />} />
        <Route path='/about' element={<About />} />
        <Route path='/weather' element={<MapApplication />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;



