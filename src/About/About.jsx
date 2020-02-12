import React from 'react'
import Ryan from '../images/Ryan.jpg'
import './About.css'
import Arrow from '../images/Arrowd.png'

const About = () => {
        return (
            <div>
                <section id="AboutMe">
                    <div className="about">
                        <img
                            className="about-img"
                            src={Ryan}
                            alt="Ryan"
                        />
                        <div className="about-download">
                            click to download
                        </div>
                        <a
                            className="about-resume"
                            target='_blank'
                            rel="noopener noreferrer"
                            href="https://dianne-adair-s3.s3.amazonaws.com/a413a625-1b04-4a1e-a897-2a2c52e0310a-Ryan-Hall-Resume.pdf">
                            Resume
                        </a>
                        <p className="about-text">
                            I have always loved to build and fix things. After 24 years of experience in the IT industry, 
                            and repeated requests from clients to build websites and/or apps, I discovered a new passion 
                            for coding. I’m excited to announce that I can now offer a full-service IT experience for all 
                            of your web development needs.
                        </p>
                     </div>
                        <footer className="about-arrow">
                            <a href="#WorkExp">Work Experience</a>
                            <img
                                src={Arrow}
                                alt="Down Arrow"
                            />
                        </footer>
                </section>
            </div>
        )
    }

export default About
