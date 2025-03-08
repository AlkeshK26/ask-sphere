import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import Queries from './pages/Queries';
import Queryform from './pages/Queryform';
import Solutionform from './pages/Solutionform';
import QueryDetail from './pages/QueryDetail';
import About from './pages/About';
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
        <Route path = "/queryform" element={<Queryform />} />
        <Route path = "/solutionform/:queryId" element={<Solutionform />} />
        <Route path = "/query/:queryId" element={<QueryDetail />} />
        <Route path = "/about" element={<About />} />
      </Routes>
      <Footer />
      </>
      
      
    
  );
}

export default App;
