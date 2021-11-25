import React from "react";
import './Intro.css'

function Intro() {

    const handleNav = elementId => {
        document.getElementById(elementId).scrollIntoView();
    }

    return (
        <section className="intro" id="intro">
            <div className="text">
                <h3>Web Developer</h3>
                <h2>Hello, my name is Mar Opradolce</h2>
                <p>I am a web developer with a love for design. I like to keep up with new tecnologies and learn something new every day.</p>
                <div className="buttons">
                    <p onClick={() => handleNav("projects")}>Projects</p>
                    <a href="https://www.linkedin.com/in/mar-opradolce-213456184/" target="_blank">Linkedin</a>
                </div>
            </div>
            <img src="yellow-blob.svg" alt="yellow-blob" />
        </section>
    );
}

export default Intro;