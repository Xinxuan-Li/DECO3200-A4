import React from "react";

function HelpAboutFloating({ type, closeWindow }) {
    return (
        <div className="help-and-about-floating-window">
            <h3 className="help-and-about-floating-window-title">
                {type === "help" ? "Instruction" : "About Us:"}
            </h3>
            <p className="help-and-about-floating-window-text">
                {type === "help" ? "help text" : "about text"}
            </p>
            <button className="help-and-about-floating-window-close-button" onClick={closeWindow}>Close</button>
        </div>
    );
}

export default HelpAboutFloating;
