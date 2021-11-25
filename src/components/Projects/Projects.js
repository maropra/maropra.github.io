import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import SectionTitle from "../SectionTitle/SectionTitle";
import "./Projects.css"

function Projects() {
    return (
        <section id="projects" className="projects">
            <SectionTitle title="Projects" />
            <ProjectCard
                img="ChooseAdventure.jpg"
                title="Choose your own adventure"
                text="I created this proyect as a way to practice rerendering and life cycle methods with react."
                link="https://codesandbox.io/s/parcial-react-dh-u5gde"
            />
            <ProjectCard
                img="puntadaLibre.jpg"
                title="Puntada Libre"
                text="I developed this proyect to practice my markup ans styling hanilities with HTML and CSS. It’s a mock up for a landing page for an embroidery store."
                link="https://maropra.github.io/proyectoCoder"
            />
            <ProjectCard
                img="wikipaises.jpg"
                title="Countries of the world"
                text="This is a website I buit to practice fetch petitions to an API in React. I used the free API RestCountries. "
                link="https://codesandbox.io/s/fe3-wikipaises-1fh1w?file=/src/App.js"
            />
        </section>
    );
}

export default Projects;