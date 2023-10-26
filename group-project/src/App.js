import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import MapPage from "./components/MapPage";
import CountryPage from "./components/CountryPage";
import EventPage from "./components/EventPage";
import china from "./contents/countries/china.json";
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
import CountryTemplate from "./components/CountryTemplate";
import load from "./components/LoadJSON";

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
		countryMap.set(country.name, country);
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
				componentToRender = (
					<MapPage
						onCountryClick={renderCountryPage}
						countryMap={countryMap}
					/>
				);
				break;
			case "country":
				componentToRender = (
					// country object as a prop
					<CountryPage
						country={currentPage[1]}
						onWorldMapClick={handleWorldMapClick}
						onRandomCountryClick={handleRandomCountryClick}
					/>
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
	function renderCountryPage(countryName) {
		if (countryMap.has(countryName))
			setCurrentPage(["country", countryMap.get(countryName)]);
		// only for testing, one page for those countries with no content should be createtd later
		else setCurrentPage(["event", null]);
	}

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
