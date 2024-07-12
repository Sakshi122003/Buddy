import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import ContactMe from './components/ContactMe';
import Login from './components/Login';
import Signin from './components/SignIn';
import PetCare from './components/Care';
import BuyNow from './components/Buy';
import UserDetails from './components/UserDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contactme" element={<ContactMe />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/care" element={<PetCare />} />
        <Route path="/buy" element={<BuyNow />} />
        <Route path="/userDetails" element={<UserDetails />} /> 
        
      </Routes>
    </Router>
  );
}

export default App;
