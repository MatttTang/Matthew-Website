import React, { Component } from 'react'

import Game from "../Assets/Images/game.jpg"
import "../Assets/Style/Work.css"
export class Work extends Component{
    render(){
        return(
            <div className="Parent">
                <h1>Projects:</h1>

                <article className="box-1">
                  <h3>Unity 2D Game:</h3>
                  <p> A 2D platformer I am still developing as a personal project. Currently the player character can move and jump, with animation from a free asset package. Next step is to develop an enemy unit. The files will be uploaded to GitHub and updated regularly.</p>
                </article>

                <div className="GameImg">
                  <img src={Game} className="game-pic"/>
                </div>
            </div>
        )
    }
}

export default Work
