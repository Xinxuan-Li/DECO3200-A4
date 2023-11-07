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
                        This culinary journey delves into the delectable
                        tapestry of tastes, ingredients, and traditions passed
                        down through generations.
                        <br />
                        The mission is to explore the heart of culinary
                        traditions, from the bustling streets of Asia to the
                        charming kitchens of Europe, from the vibrant markets of
                        South America to the cozy homes of North America. <br />
                        <br />
                        Welcome to a world of flavors, where traditions are
                        sustained, and culinary wonders are shared.
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
                            description="Click to explore our interactive world map, where you can search for your hometown or any countries that pique your interest."
                        />
                    </div>
                    <div className="map-card-div">
                        <MapCard
                            onClick={onRandomCountryClick}
                            image={"./img/random-country.png"}
                            icon={"./img/icon/random-country.png"}
                            text="Explore a Random Country"
                            description="Not sure which country to explore? Give our exciting random country feature a try! It's like drawing a card and embarking on an adventure!"
                        />
                    </div>
                </section>
            </div>
        </div>
    );
}

export default LandingPage;
