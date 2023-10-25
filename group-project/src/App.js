import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import MapPage from "./components/MapPage";
import china from "./contents/countries/china.json";
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
