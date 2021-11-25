import React from "react";
import "./ProjectCard.css"

function ProjectCard(props) {
    return (
        <div className="project-card">
            <div className="card-img">
                <img src={props.img} />
            </div>
            <div className="card-text">
                <h4>{props.title}</h4>
                <p>{props.text}</p>
                <a href={props.link} target="_blank">View Project</a>
            </div>
        </div>
    );
}

export default ProjectCard;