import React, { useEffect, useState } from "react";
import SideMenu from "../SideMenu/SideMenu";
import './Navbar.css'

function Navbar() {

    let listener = null
    const [scrollState, setScrollState] = useState("top")

    useEffect(() => {
        listener = document.addEventListener("scroll", e => {
            var scrolled = document.scrollingElement.scrollTop
            if (scrolled >= 120) {
                if (scrollState !== "amir") {
                    setScrollState("amir")
                }
            } else {
                if (scrollState !== "top") {
                    setScrollState("top")
                }
            }
        })
        return () => {
            document.removeEventListener("scroll", listener)
        }
    }, [scrollState])

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleDesplegable = (id) => {
        if (isMenuOpen) {
            setIsMenuOpen(false)
        } else {
            setIsMenuOpen(true)
        }
    }

    const handleNav = elementId => {
        document.getElementById(elementId).scrollIntoView();
    }


    return (
        <nav style={{ background: scrollState === "top" ? "none" : "rgba(255,255,255,0.8)" }}>
            <div className="logo" onClick={() => handleNav("intro")} >Mar Opradolce</div>
            <ul>
                <li onClick={() => handleNav("about")}>About</li>
                <li onClick={() => handleNav("skills")}>Skills</li>
                <li onClick={() => handleNav("projects")}>Projects</li>
                <li onClick={() => handleNav("contact")}>Contact</li>
            </ul>
            <button onClick={handleDesplegable} className="menu"><i className={isMenuOpen ? "fas fa-ellipsis-h light" : "fas fa-ellipsis-h"} /></button>
            <SideMenu isMenuOpen={isMenuOpen} handleDesplegable={handleDesplegable} handleNav={handleNav} />

        </nav>
    );
}

export default Navbar;
