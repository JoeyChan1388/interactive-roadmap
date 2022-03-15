import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className="header">
      <header>
        <a href="/"><img class="logo" src="/logo.jpeg" alt="logo" /></a>

        <div class="navbar">
          <a href="/coding"> Coding</a>
          <a href="/about"> About</a>
          <a href="/signup"> Register</a>
          <a href="/help"> Help</a>
          <a class="cta" href="/login"><button>Sign In</button></a>
        </div>
      </header>

    </div>
  )
}

export default Header