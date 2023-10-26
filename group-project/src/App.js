import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import MapPage from './components/MapPage';
import china from "./contents/countries/china.JSON";
import france from "./contents/countries/france.JSON";
import india from "./contents/countries/india.JSON";
import italy from "./contents/countries/italy.JSON";
import japan from "./contents/countries/japan.JSON";
import lebanon from "./contents/countries/lebanon.JSON";
import malaysia from "./contents/countries/malaysia.JSON";
import mexico from "./contents/countries/mexico.JSON";
import russia from "./contents/countries/russia.JSON";
import south_korea from "./contents/countries/south_korea.JSON";
import thailand from "./contents/countries/thailand.JSON";
import turkey from "./contents/countries/turkey.JSON";
import vietnam from "./contents/countries/vietnam.JSON";
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


    function handleWorldMapClick() {
        console.log(`You jumped to world map page`);
        // switch page logic here
    }

    function handleRandomCountryClick() {
        const randomIndex = Math.floor(Math.random() * countryList.length);
        const selectedCountry = countryList[randomIndex];
        console.log(`You jumped to ${selectedCountry.countryName}`);
        // switch page logic here
    }


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
            <Navbar />
            <LandingPage
                onWorldMapClick={handleWorldMapClick}
                onRandomCountryClick={handleRandomCountryClick}
                onRandomDishClick={handleRandomDishClick}
                randomDish={randomDish}
            />
            <MapPage />
        </div>
    );
}

export default App;


