import React, { useState } from 'react'
import { useAuth } from '../../Firebase/AuthContext';
import { useNavigate } from 'react-router-dom';
import './Signin.css'

function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
	const { login, logout, currentUser } = useAuth();
  const navigation = useNavigate();

  async function onSignIn() {
    await login(email, password);

    if (currentUser) {
      navigation("/");
    }
  }

  if (currentUser) {
    logout();
  }

  return (
    <div>
        <div className="sign-in-form"> 
            <h1 className="sign-in-title"> Sign in</h1>
            <input type="text" 
            className="input-long" 
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}>
            </input>

            <input type="password" 
            className="input-long" 
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}>
            </input>

            <input type="submit" className="btn-submit" value="Sign in" onClick={onSignIn}/>
            <br/>
            <a href="/signup" className="link"> Need an Account?</a>
        </div>
    </div>
  )
}

export default Signin