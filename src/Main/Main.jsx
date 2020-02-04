import React, { Component } from 'react'
import './Main.css'
import Arrow from '../images/Arrowd.png'

export class Main extends Component {
    render() {

        return (
            <div>
        <section id="main-header">
				<header>
                        <h1>Ryan Hall</h1>
                        <div className="main-lines"/>
                        <p>IT - Web Developer</p>
				</header>
				<footer >
                        <a href="#AboutMe">About Me</a>
                        <img
                            // className="main-arrow"
                            src={Arrow}
                            alt="Arrow pointing down"/>
				</footer>
			</section>
                
            </div>
        )
    }
}

export default Main
