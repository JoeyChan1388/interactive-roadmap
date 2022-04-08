import React from "react";
import './Home.css';

const Home = () => {

    return(  
        <div>
            <a className="background-img" href="/"><img className="background" src="/homeimg.png" alt="background" /></a>
            <h3 className="small-title">THE BEST INTERACTIVE ROADMAP </h3>
            <h1 className="big-title">Learn How to Code With Many Different Languages </h1>
            <h1 className="middle-title"> Click Here to Start Your Journey!</h1>
            
            <a href="/roadmaps"> <button className="btn-start"> Start Now !</button></a>
            <hr className="vector"></hr>
        </div>
    )

}

export default Home