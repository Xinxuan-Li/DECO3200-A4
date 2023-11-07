import React from "react";
import "../css/floatingwindows.css"; // 引入相关CSS文件

function HelpAboutFloating({ type, closeWindow }) {
    return (
        <div className="help-and-about-container">
            <div className="help-and-about-overlay" onClick={closeWindow}></div>
            <div className="help-and-about-floating-window">
                <h3 className="help-and-about-floating-window-title">
                    {type === "help" ? "Instruction" : "About Us:"}
                </h3>
                <p className="help-and-about-floating-window-text">
                    {type === "help" ? "Contact: Erica Hu - lyhuxinyi@gmail.com; Xinxuan Li - @; Gabin Hong - @." : "Link to the report:"}
                </p>
            </div>
        </div>
    );
}


export default HelpAboutFloating;
