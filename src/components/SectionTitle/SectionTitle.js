import React from "react";
import './SectionTitle.css';

function SectionTitle(props) {
    return (
        <>
            <h2 className="section-title">{props.title}</h2>
            <hr />
        </>
    );
}

export default SectionTitle;