import React, { Component } from 'react'
import "../Assets/Style/Page.css"
import Matt from "../Assets/Images/Matt-1.jpg"

export class About extends Component{
    render(){
        return(
            <article className="box-1">
                <h1 className="Heading">
                    About
                </h1>

                <div className="Content">
                    <img src={Matt} className="Pix-1" />

                    <p className="container-1">
                        I am an aspiring software engineer currently attending Seattle Pacific University. I have experience primarily in C++, but I am currently learning JavasScript.
                        Most of my JavaScript experience is in the form of React.js, which is what this site is built upon. I will earn my degree by June 2021 from Seattle Pacific University.
                    </p>

                </div>

                <div className="Content-1">

                    <p className="container-2">
                        Although I lack in technical experience, I do make up for it with a propensity for learning. I have managed to graduate two years earlier than my peers by quickly learning
                        what was necessary to excel in an accelerated curriculum.  
                    </p>
                </div>
                
            </article>
        );
    }
}

export default About