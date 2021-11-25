import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import './Skills.css';

function Skills() {
    return (
        <section id="skills" className="skills">
            <SectionTitle title="Skills" />
            <div className="icons">
                <i className="fab fa-html5" />
                <i className="fab fa-css3-alt" />
                <i className="fab fa-js" />
                <i class="fab fa-sass" />
                <i class="fab fa-react" />
                <i class="fab fa-figma" />
                <i class="fab fa-bootstrap" />
                <i class="fab fa-node-js" />
                <i class="fab fa-java" />
                <i class="fab fa-git-alt" />
                <i class="fas fa-database" />
                <i class="fas fa-terminal"></i>
            </div>
        </section>
    );
}

export default Skills;