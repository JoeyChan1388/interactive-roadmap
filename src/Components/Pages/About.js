import { getDefaultNormalizer } from "@testing-library/react";
import React from "react";
import "./About.css";

const About = () => {

    return (
    <div>
        <a className="about-img"><img class="background" src="/about.jpg" alt="background"/></a>
        <h1 className="about-title">About Us </h1>
        <p1 className="header-about">We are a group of CPA students from Durham College in our final semester
        and were given the oppurtunity to create a website to demonstrate all of our skills we have learned
        throughout <br/>
         the course. Joey Chan and I (Shawthan Kanagasababathy) decided to create a website to show
        case the different languages we have learned while also being able to help new and experienced programmers
        learn how to code with languages they may have never used before.
        <br/>
        <br/>
        <br/>
        In Short, this website was made for our final project in the Capstone course and serves as a demonstration of our 
        knowledge in several different programming languages as well as our web development skills. We hope that the content
        we create for this website will help programmers learn something new and help them become a programming master.
        </p1>
        
    </div>

    ) 
}

export default About