import React from "react";
import "./Contact.css";

const Contact = () =>  {
return (

    <div>

      <div className="contact-form"> 
          <h1 className="contact-title"> Contact Us</h1>
          <input type="text" className="input-long" placeholder="Name"></input>
          <input type="email" className="input-long" placeholder="Email"></input>
          <input type="text" className="input-description" placeholder="Description"></input>
          <input type="submit" className="btn-submit" value="Submit"/>
          <a className="background-img"><img className="background" src="/contactimg.jpg" alt="background"/></a>
      </div>
  </div>

)

}
export default Contact