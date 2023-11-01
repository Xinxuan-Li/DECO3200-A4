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
                    {type === "help" ? "help texthelpp texthelp texthelp texthelp texthelp p texthelp texthelp texthelp texthelp p texthelp texthelp texthelp texthelp p texthelp texthelp texthelp texthelp p texthelp texthelp texthelp texthelp p texthelp texthelp texthelp texthelp  texthelp texthelp texthelp texthelp text" : "about text"}
                </p>
            </div>
        </div>
    );
}


export default HelpAboutFloating;
