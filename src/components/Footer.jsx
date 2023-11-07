import React from "react";
import "../css/footer.css";

function Footer({ onWorldMapClick, onRandomCountryClick, isInCountryPage }) {
    return (
        <section className="footer">
            <div className="footer-button" onClick={onWorldMapClick}>
                <img
                    className="map-card-arrow"
                    src="./img/icon/button-arrow1.svg"
                    alt="map card arrow"
                />
                <img
                    className="map-card-icon"
                    src="./img/icon/world-map.png"
                    alt="map card icon"
                />
                <p className="footer-text">
                    {isInCountryPage
                        ? "Back to world map"
                        : "Discover via world map"}
                </p>
                <div className="button-decor-highlight"></div>
            </div>
            <div className="footer-button" onClick={onRandomCountryClick}>
                <p className="footer-text">
                    {isInCountryPage
                        ? "Explore next random country"
                        : "Explore a random country"}
                </p>
                <img
                    className="map-card-icon"
                    src="./img/icon/random-country.png"
                    alt="map card icon"
                />
                <img
                    className="map-card-arrow"
                    src="./img/icon/button-arrow.svg"
                    alt="map card arrow"
                />
                <div className="button-decor-highlight"></div>
            </div>
        </section>
    );
}

export default Footer;
