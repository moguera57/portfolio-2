import React, { Component } from "react";

class Navbar extends Component{

    render(){

        return(
            <nav>
                <ul>
                    <li><a href="/portfolio">Portfolio</a></li>
                    <li><a href="/about">About Me</a></li>
                    <li><a href="/resume">Resume</a></li>
                </ul>
            </nav>
        )
    }
}

export default Navbar