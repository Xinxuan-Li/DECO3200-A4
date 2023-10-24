import MapCard from "./MapCard";
import TodayDishCard from "./TodayDishCard";
import React from "react";

function LandingPage({ onWorldMapClick, onRandomCountryClick, onRandomDishClick, randomDish }) {
    return (
        <div className="page-body">
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
            <section className="today-dishes">
                <button
                    className="swich-random-dish"
                    onClick={onRandomDishClick}
                >
                    Click me!
                </button>
                <TodayDishCard dish={randomDish} />
            </section>
        </div>
    );
}

export default LandingPage;
