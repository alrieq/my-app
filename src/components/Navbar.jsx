import React from "react";
import reactLogo from './../assets/react.svg'
export default function Navbar() {
    return (
        <div>
            <header>
                <nav className="nav">
                    <img src={reactLogo} alt="react" />
                    <h3 className="blueHeader">ReactFacts</h3>
                    <h4>React Course - Project 1</h4>
                </nav>
            </header>
        </div>
    )
}