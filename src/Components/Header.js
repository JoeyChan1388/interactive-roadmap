import React, { useState } from 'react'
import { useAuth } from '../Firebase/AuthContext';
import './Header.css';

const Header = () => {
  const { currentUser, logout } = useAuth();
  const [userName, setUserName] = useState();

  return (
    <div className="header">
      <header>

        <a href="/" className="logo-img"><img className="logo" src="/logo.jpeg" alt="logo" /></a>
        <div className="navbar">
          <a href="/about"> About</a>
          <a href="/roadmaps"> Roadmaps</a>
          {!currentUser &&
            <a href="/signup"> Register</a>
          }
          <a href="/contact"> Contact Us</a>
          {!currentUser &&
            <a className="cta" href="/login"><button>Sign In</button></a>
          }

          {currentUser &&
            <a href={'/users/' + currentUser.uid}>{currentUser.email}</a>
          }

          {currentUser &&
            <a className="cta" href="/login"><button onClick={logout}>Sign Out</button></a>
          } 

        </div>
      </header>

    </div>
  )
}

export default Header