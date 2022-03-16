import React from 'react'
import './Signin.css'

function Signin() {
  return (
    <div>
        <div className="sign-in-form"> 
            <h1 className="sign-in-title"> Sign in</h1>
            <input type="text" className="input-long" placeholder="Email or Username"></input>
            <input type="password" className="input-long" placeholder="Password"></input>
            <input type="submit" className="btn-submit" value="Sign in"/>
            <br/>
            <a href="/signup" className="link"> Need an Account?</a>
        </div>
    </div>
  )
}

export default Signin