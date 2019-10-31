import React, { Component } from 'react'
import {
    Link
} from 'react-router-dom';

import "../Assets/Style/CVStyle.css"

import Matthew from "../Assets/File/Matt's Resume.pdf"
export class CV extends Component{
    render(){
        return(
            <div className="Parent">
                <iframe src={Matthew}/>
            </div>
        )
    }
}

export default CV
