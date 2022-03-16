import React from 'react'
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <header>

        <a href="/" className="logo-img"><img class="logo" src="/logo.jpeg" alt="logo" /></a>
        <div class="navbar">
          <a href="/about"> About</a>
          <a href="/roadmaps"> Roadmaps</a>
          <a href="/signup"> Register</a>
          <a href="/contact"> Contact Us</a>
          <a class="cta" href="/signin"><button>Sign In</button></a>
        </div>
      </header>

    </div>
  )
}

export default Header