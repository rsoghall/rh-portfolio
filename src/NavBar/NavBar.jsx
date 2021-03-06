import React from 'react'
import GHub from '../images/GitHubLogo2.png'
import LinkedIn from '../images/linkedin100.png'
import DA from '../images/dalogo5.png'
import MWVO from '../images/mwlogo4.png'
import Shift from '../images/shiftlogo101.png'
import RH from '../images/rhlogo.png'
import './NavBar.css';

const NavBar = () => {
        return (
            <div className="navbar">
                    <div className="navbar-rhit">
                        <img
                            src={RH}
                            alt="Ryan Hall IT Logo"
                        />
                    </div>
                <div className="navbar-links">
                <a
                    target='_blank'
                    rel="noopener noreferrer"
                    href="https://www.dianneadair.org/#/">
                     <div className="navbar-da">
                        <img
                            src={DA}
                            alt="Dianne Adair Logo"
                            />
                    </div>
                </a>
                <a
                    target='_blank'
                    rel="noopener noreferrer"
                    href="https://www.mikewadevo.com//">
                     <div className="navbar-mwvo">
                        <img
                            src={MWVO}
                            alt="Mike Wade Voice Over Logo"
                            />
                    </div>
                </a>
                <a
                    target='_blank'
                    rel="noopener noreferrer"
                    href="https://www.shiftradr.com//">
                    <div className="navbar-shift">
                        <img
                            src={Shift}
                            alt="Shift Trader Logo"
                            />
                    </div>
                </a>
                <a
                    target='_blank'
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/ryanhall-it-dev/">
                    <div className="navbar-linkedin">
                        <img
                        src={LinkedIn}
                        alt="Linked In Logo"
                        />
                    </div>
                </a>
                <a
                    target='_blank'
                    rel="noopener noreferrer"
                    href="https://github.com/rsoghall">
                    <div className="navbar-github">
                        <img
                            src={GHub}
                            alt="Gitbub Logo"
                            />
                    </div>
                </a>
            </div>
        </div>
                

        )
    }

export default NavBar
