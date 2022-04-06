import React, { useEffect, useState } from 'react'
import { useAuth } from '../../Firebase/AuthContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Signin.css'

function Signup() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false)
  const navigation = useNavigate();

  const { signup, deleteAccount, currentUser } = useAuth();

  useEffect(() => {
    if (currentUser) {
      try {
        axios.post('http://localhost:3001/user/create', {
          userid: currentUser.uid,
          userName: userName,
          email: email,
        }).then((response) => {
          console.log(response);
          console.log('User created successfully, rerouting');
          navigation('/');
        });
      } catch (e) {
        console.log(e);
        currentUser.delete().then(() => {
          console.log('Database failed, user rolled back');
        });
      }
    }
  }, [currentUser, userName, email, navigation]);

  // Signup button click
  async function onSignUp() {
    try {
      setLoading(true);
      await signup(email, password)
    }
    catch (e) {
      console.log(e)
    } 
  };

  return (
    <div>
      <div className="sign-in-form">
        <h1 className="sign-in-title"> <strong> Create an Account </strong> </h1>

        <input type="text"
          className="input-short"
          placeholder="First Name"
          onChange={(e) => {
            setFirstName(e.target.value);
          }}>
        </input>

        <input type="text"
          className="input-short"
          placeholder="Last Name"
          onChange={(e) => {
            setLastName(e.target.value);
          }}>
        </input>

        <input type="email"
          className="input-long"
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}>
        </input>

        <input type="text"
          className="input-long"
          placeholder="Username"
          onChange={(e) => {
            setUserName(e.target.value);
          }}>
        </input>

        <input type="password"
          className="input-long"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}>
        </input>

        <input type="submit"
          className="btn-submit"
          value="Sign up"
          disabled={loading}
          onClick={onSignUp} />

        <br />
        <a href="/login" className="link"> Have an Account?</a>
      </div>
    </div>
  )
}

export default Signup