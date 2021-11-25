import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import "./About.css"

function About() {
    return (
        <section id="about" className="about">
            <SectionTitle title="About me" />
            <p>After finishing my career in Medicine, I started studying web development during the pandemic and fell in love with it. I earned a grant to study full time at Digital House to be a Certified Tech Developer.</p>
            <p> I love being outdoors, hikking and riding my bike on the weekends. My family (including my cat) are the most important things in my life.</p>
            <button>Resume</button>
        </section>
    );
}

export default About;