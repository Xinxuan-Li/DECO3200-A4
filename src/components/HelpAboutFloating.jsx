import React from "react";
import "../css/floatingwindows.css"; // 引入相关CSS文件

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
                            <strong>Gabin Hong</strong> - ghon0206@uni.sydney.edu.au.
                        </span>
                    ) : (
                        "Link to the report:"
                    )}
                </p>
            </div>
        </div>
    );
}

export default HelpAboutFloating;
