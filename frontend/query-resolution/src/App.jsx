import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import Queries from './pages/queries';
//import  './App.css';

function App() {

  return (
      <>
      <Header />
      <Routes>
        <Route path = "/" element={<Home />} />
        <Route path = "/login" element={<Login />} />
        <Route path = "/signup" element={<Signup />} />
        <Route path = "/profile" element={<Profile />} />
        <Route path = "/queries" element={<Queries />} />
      </Routes>
      <Footer />
      </>
      
      
    
  );
}

export default App;
