import React from "react";
import "../css/floatingwindows.css";

function HelpAboutFloating({ type, closeWindow }) {
    return (
        <div className="help-and-about-container">
            <div className="help-and-about-overlay" onClick={closeWindow}></div>
            <div className="help-and-about-floating-window">
                <h3 className="help-and-about-floating-window-title">
                    {type === "help" ? "Contact Us:" : "About Us:"}
                </h3>
                <p className="help-and-about-floating-window-text">
                    {type === "help" ? (
                        <span>
                            <strong>Erica Hu</strong> - lyhuxinyi@gmail.com
                            <br />
                            <strong>Xinxuan Li</strong> - xinxuanli1030@gmail.com
                            <br />
                            <strong>Gabin Hong</strong> - ghon0206@uni.sydney.edu.au
                        </span>
                    ) : (
                        <a href="https://www.figma.com/proto/xxrfltCfMM6zyZxmsqdCWF/DECO3200-Final-Report?page-id=0%3A1&type=design&node-id=1-2&viewport=403%2C571%2C0.21&t=Bteyo9U1A0irA1rr-1&scaling=contain&mode=design" target="_blank">Click me to view the report</a>
                    )}
                </p>
            </div>
        </div>
    );
}

export default HelpAboutFloating;
