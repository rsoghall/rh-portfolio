import React from 'react'
import './Main.css'
import Arrow from '../images/Arrowd.png'

const Main = () => {
        return (
            <div className="main-content">
                <section id="main-header">
				    <header>
                        <h1>Ryan Hall</h1>
                        <div className="main-lines"/>
                        <p>IT - Web Developer</p>
				    </header>
				    <footer className="main-arrow">
                        <a href="#AboutMe">
                            About Me
                        </a>
                        <img
                            src={Arrow}
                            alt="Down Arrow"
                        />
				    </footer>
			    </section>
            </div>
        )
    }

export default Main
