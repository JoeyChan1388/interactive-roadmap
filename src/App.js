import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Pages/Login';
import Home from './Components/Pages/Home';
import Header from './Components/Header';

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          {/* <Route exact path="/signup" element={<Signup />} /> */}
          {/* <Route exact path="/HTMLMap" element={<HTMLMap />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
