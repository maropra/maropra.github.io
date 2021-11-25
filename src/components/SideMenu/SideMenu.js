import React from "react";
import "./SideMenu.css";

function SideMenu(props) {

    const { isMenuOpen, handleDesplegable, handleNav } = props;

    const handleLink = (id) => {
        handleDesplegable();
        handleNav(id)
    }

    return (
        <div className={`${!isMenuOpen ? 'desplegable hidden' : 'desplegable'}`}>
            <div className="encabezado">
                <h3>MENU</h3>
            </div>
            <div className="cuerpo">
                <div className="links">
                    <p onClick={() => handleLink("intro")}>Home</p>
                    <p onClick={() => handleLink("about")}>About</p>
                    <p onClick={() => handleLink("skills")}>Skills</p>
                    <p onClick={() => handleLink("projects")}>Projects</p>
                    <p onClick={() => handleLink("contact")}>Contact</p>
                </div>
            </div>
        </div>
    )
}

export default SideMenu;