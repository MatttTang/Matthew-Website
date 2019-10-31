import React from 'react'
import{
    Link
} from 'react-router-dom';
import "./Assets/Style/Navbar.css"

class Navigator extends React.Component{
    render(){
        return(
            <nav className="Navigation">
                <ul>

                    <li>
                        <Link to ="/">About</Link>
                    </li>

                    <li>
                        <Link to ="/Work">Work</Link>
                    </li>

                    {/*<li>
                        <Link to ="/Portfolio">Portfolio</Link>
                    </li>*/}

                    <li>
                        <Link to ="/CV">CV</Link>
                    </li>

                </ul>
            </nav>
        )
    }
}

export default Navigator
