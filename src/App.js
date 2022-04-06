import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Pages/Signin';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact';
import Header from './Components/Header';
import JSRoadmap from './Components/Pages/JSRoadmap';
import HTMLRoadmap from './Components/Pages/HTMLRoadmap';
import CSSRoadmap from './Components/Pages/CSSRoadmap';
import CSRoadmap from './Components/Pages/CSRoadmap';
import Signup from './Components/Pages/Signup';
import { Profile } from './Components/Pages/Profile';
import { AuthProvider } from './Firebase/AuthContext';

function App() {
  return (
    <>
      <AuthProvider>
        <Header />
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/roadmaps/JS" element={<JSRoadmap />} />
            <Route exact path="/roadmaps/HTML" element={<HTMLRoadmap />} />
            <Route exact path="/roadmaps/CSS" element={<CSSRoadmap />} />
            <Route exact path="/roadmaps/CSharp" element={<CSRoadmap />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route path="/users/:uid" element={<Profile />} />
          </Routes>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
