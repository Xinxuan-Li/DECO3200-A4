import MapCard from "./MapCard";
import TodayDishCard from "./TodayDishCard";
import React from "react";

function LandingPage({ onWorldMapClick, onRandomCountryClick, onRandomDishButtonClick,  randomDish, onRandomDishClick }) {
    return (
        <div className="landing-page">
            <section className="hero">
                <h1>Sustaining Culinary Traditions Around Our World</h1>
                <h3>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore{" "}
                </h3>
            </section>
            <section className="map-cards">
                <MapCard
                    onClick={onWorldMapClick}
                    image={"./img/random-country.png"}
                    icon={"./img/icon/world-map.png"}
                    text="Discover via world map"
                    description="Elit, sed do eiusmod tempor incididunt ut labore 
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
                />
                <MapCard
                    onClick={onRandomCountryClick}
                    image={"./img/random-country.png"}
                    icon={"./img/icon/random-country.png"}
                    text="Explore a Random Country"
                    description="Elit, sed do eiusmod tempor incididunt ut labore 
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
                />
            </section>
            <section className="today-dishe">
                <button
                    className="swich-random-dish"
                    onClick={onRandomDishButtonClick}
                >
                    Click me!
                </button>
                <TodayDishCard dish={randomDish} onRandomDishClick={onRandomDishClick} />
            </section>
        </div>
    );
}

export default LandingPage;
