import React from 'react'
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <header>

        <a href="/" className="logo-img"><img className="logo" src="/logo.jpeg" alt="logo" /></a>
        <div className ="navbar">
          <a href="/about"> About</a>
          <a href="/roadmaps"> Roadmaps</a>
          <a href="/signup"> Register</a>
          <a href="/contact"> Contact Us</a>
          <a className="cta" href="/login"><button>Sign In</button></a>
        </div>
      </header>

    </div>
  )
}

export default Header