import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import MapPage from "./components/MapPage";
import CountryPage from "./components/CountryPage";
import EventPage from "./components/EventPage";
import china from "./contents/countries/china.JSON";
import france from "./contents/countries/france.json";
import india from "./contents/countries/india.json";
import italy from "./contents/countries/italy.json";
import japan from "./contents/countries/japan.json";
import lebanon from "./contents/countries/lebanon.json";
import malaysia from "./contents/countries/malaysia.json";
import mexico from "./contents/countries/mexico.json";
import russia from "./contents/countries/russia.json";
import south_korea from "./contents/countries/south_korea.json";
import thailand from "./contents/countries/thailand.json";
import turkey from "./contents/countries/turkey.json";
import vietnam from "./contents/countries/vietnam.json";
import React from "react";

function App() {
    const countryList = [
        china,
        france,
        india,
        italy,
        japan,
        lebanon,
        malaysia,
        mexico,
        russia,
        south_korea,
        thailand,
        turkey,
        vietnam,
    ];

    const countryMap = new Map();

    countryList.forEach((country) => {
        countryMap.set(country.countryName, country);
    });

    // landingpage: ["landing", null] mappage: ["map", null] countrypage: ["country", Country js object] eventpage: ["event", null]
    const [currentPage, setCurrentPage] = React.useState(["landing", null]);

    // Render body part according to currentPage state
    function renderBody() {
        let componentToRender = null;
        switch (currentPage[0]) {
            case "landing":
                componentToRender = (
                    <LandingPage
                        onWorldMapClick={handleWorldMapClick}
                        onRandomCountryClick={handleRandomCountryClick}
                        onRandomDishClick={handleRandomDishClick}
                        randomDish={randomDish}
                    />
                );
                break;
            case "map":
                componentToRender = <MapPage />;
                break;
            case "country":
                componentToRender = (
                    // country object as a prop
                    <CountryPage country={currentPage[1]} />
                );
                break;
            case "event":
                componentToRender = <EventPage />;
                break;
        }
        return componentToRender;
    }

    // Change currentPage to landingPage
    function handleLogoClick() {
        console.log(`You jumped to landing page`);
        setCurrentPage(["landing", null]);
    }

    // Change currentPage to mapPage
    function handleWorldMapClick() {
        console.log(`You jumped to world map page`);
        // switch page logic here
        setCurrentPage(["map", null]);
    }

    // Draw a random country
    // Change currentPage to countryPage of the random country
    function handleRandomCountryClick() {
        const randomIndex = Math.floor(Math.random() * countryList.length);
        const selectedCountry = countryList[randomIndex];
        console.log(`You jumped to ${selectedCountry.countryName}`);
        // switch page logic here
        setCurrentPage(["country", selectedCountry]);
    }

    function handleEventClick() {
        console.log(`You jumped to event page`);
        // switch page logic here
        setCurrentPage(["event", null]);
    }

    function handleHelpClick() {
        console.log(`help page pop up`);
        // floating window logic here
    }

    function handleAboutClick() {
        console.log(`about page pop up`);
        // floating window logic here
    }

    // Change currentPage to countryPage of the countryName
    function renderCountryPage(countryName) {}

    // Draw a random dish
    // Change currentPage to countryPage of the random dish's country
    const [randomDish, setRandomDish] = React.useState(null);
    function handleRandomDishClick() {
        // select a random country first
        const selectedCountry =
            countryList[Math.floor(Math.random() * countryList.length)];
        // select a random dish from the country
        const selectedDIsh =
            selectedCountry.traditionalDishes[
                Math.floor(
                    Math.random() * selectedCountry.traditionalDishes.length
                )
            ];
        setRandomDish([selectedCountry, selectedDIsh]);
    }

    return (
        <div className="app">
            <Navbar
                onLogoClick={handleLogoClick}
                onWorldMapClick={handleWorldMapClick}
                onEventClick={handleEventClick}
                onHelpClick={handleHelpClick}
                onAboutClick={handleAboutClick}
            />
            {renderBody()}
        </div>
    );
}

export default App;
