import MapCard from "./MapCard";
import TodayDishCard from "./TodayDishCard";
import React from "react";
import "../css/landingpage.css";

function LandingPage({
    onWorldMapClick,
    onRandomCountryClick,
    onRandomDishButtonClick,
    randomDish,
    onRandomDishClick,
}) {
    return (
        <div className="landing-page">
            <div className="left-part">
                <div className="hero">
                    <h1>Sustaining Culinary Traditions Around Our World</h1>
                    <h3>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore Lorem ipsum
                        dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore{" "}
                    </h3>
                </div>
                <div className="today-dishes">
                    <button
                        title="Click to get a new random dish"
                        className="switch-random-dish"
                        onClick={onRandomDishButtonClick}
                    >
                        Press me!
                    </button>
                    <TodayDishCard
                        dish={randomDish}
                        onRandomDishClick={onRandomDishClick}
                    />
                </div>
            </div>

            <div className="map-cards">
                <section className="map-cards-section">
                    <h2 className="map-card-instruction">Would you like to</h2>
                    <div className="map-card-div">
                        <MapCard
                            onClick={onWorldMapClick}
                            image={"./img/world-map.png"}
                            icon={"./img/icon/world-map.png"}
                            text="Discover via world map"
                            description="Elit, sed do eiusmod tempor incididunt ut labore 
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
                        />
                    </div>
                    <div className="map-card-div">
                        <MapCard
                            onClick={onRandomCountryClick}
                            image={"./img/random-country.png"}
                            icon={"./img/icon/random-country.png"}
                            text="Explore a Random Country"
                            description="Elit, sed do eiusmod tempor incididunt ut labore 
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
                        />
                    </div>
                </section>
            </div>
        </div>
    );
}

export default LandingPage;
