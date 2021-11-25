import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import "./Contact.css"

function Contact() {
    return (
        <section id="contact" className="contact">
            <SectionTitle title="Contact me" />
            <div className="icons">
                <a href="https://www.instagram.com/maropradolce/" target="_blank">
                    <i className="fab fa-instagram" />
                </a>
                <a href="https://www.linkedin.com/in/mar-opradolce-213456184/" target="_blank">
                    <i className="fab fa-linkedin-in" />
                </a>
                <a href="mailto:mopradolce@gmail.com" target="_blank">
                    <i className="fas fa-envelope" />
                </a>
            </div>
            <p>Mar Opradolce 2021</p>
        </section>
    );
}

export default Contact;