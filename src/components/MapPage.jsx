import EachCountryMap from "./EachCountryMap";
import mapPathObjects from "./mapPathObjects";
import React from "react";
import "../css/mappage.css";

function MapPage({ onCountryClick, countryMap }) {
    const [hoveredCountry, setHoveredCountry] = React.useState(null);
    const [isSearchBarExpanded, setSearchBarExpanded] = React.useState(false);
    function toggleSearchBar() {
        setSearchBarExpanded(!isSearchBarExpanded);
    }
    function onMapHover(countryName) {
        setHoveredCountry(countryName);
        console.log(countryName);
    }

    function resetMapStyle() {
        setHoveredCountry(null);
        console.log(`mouse leaved`);
    }

    const countryInitials = [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
    ];
    const counrtyName = [
        "Afghanistan",
        "Albania",
        "Algeria",
        "Andorra",
        "Angola",
        "Argentina",
        "Armenia",
        "Australia",
        "Austria",
        "Azerbaijan",
        "Bahamas",
        "Bahrain",
        "Bangladesh",
        "Barbados",
        "Belarus",
        "Belgium",
        "Belize",
        "Benin",
        "Bhutan",
        "Bolivia",
        "Botswana",
        "Brazil",
        "Brunei",
        "Bulgaria",
        "Burkina Faso",
        "Burundi",
        "Cambodia",
        "Cameroon",
        "Canada",
        "Chad",
        "Chile",
        "China",
        "Colombia",
        "Comoros",
        "Congo",
        "Costa Rica",
        "Croatia",
        "Cuba",
        "Cyprus",
        "Czech Republic",
        "Denmark",
        "Djibouti",
        "Dominica",
        "Dominican Republic",
        "Ecuador",
        "Egypt",
        "El Salvador",
        "Equatorial Guinea",
        "Eritrea",
        "Estonia",
        "Ethiopia",
        "Fiji",
        "Finland",
        "France",
        "Gabon",
        "Gambia",
        "Georgia",
        "Germany",
        "Ghana",
        "Greece",
        "Grenada",
        "Guatemala",
        "Guinea",
        "Guinea-Bissau",
        "Guyana",
        "Haiti",
        "Honduras",
        "Hungary",
        "Iceland",
        "India",
        "Indonesia",
        "Iran",
        "Iraq",
        "Ireland",
        "Israel",
        "Italy",
        "Jamaica",
        "Japan",
        "Jordan",
        "Kazakhstan",
        "Kenya",
        "Kiribati",
        "Korea",
        "Kuwait",
        "Kyrgyzstan",
        "Laos",
        "Latvia",
        "Lebanon",
        "Lesotho",
        "Liberia",
        "Libya",
        "Liechtenstein",
        "Lithuania",
        "Luxembourg",
        "Macedonia",
        "Madagascar",
        "Malawi",
        "Malaysia",
        "Maldives",
        "Mali",
        "Malta",
        "Mauritania",
        "Mauritius",
        "Mexico",
        "Moldova",
        "Monaco",
        "Mongolia",
        "Montenegro",
        "Morocco",
        "Mozambique",
        "Myanmar",
        "Namibia",
        "Nauru",
        "Nepal",
        "Netherlands",
        "New Zealand",
        "Nicaragua",
        "Niger",
        "Nigeria",
        "Norway",
        "Oman",
        "Pakistan",
        "Palau",
        "Panama",
        "Papua New Guinea",
        "Paraguay",
        "Peru",
        "Philippines",
        "Poland",
        "Portugal",
        "Qatar",
        "Romania",
        "Russia",
        "Rwanda",
        "Saint Lucia",
        "Samoa",
        "San Marino",
        "Saudi Arabia",
        "Senegal",
        "Serbia",
        "Seychelles",
        "Singapore",
        "Slovakia",
        "Slovenia",
        "Solomon Islands",
        "Somalia",
        "South Africa",
        "Spain",
        "Sri Lanka",
        "Sudan",
        "Suriname",
        "Swaziland",
        "Sweden",
        "Switzerland",
        "Syria",
        "Taiwan",
        "Tajikistan",
        "Tanzania",
        "Thailand",
        "Togo",
        "Tonga",
        "Trinidad and Tobago",
        "Tunisia",
        "Turkey",
        "Turkmenistan",
        "Uganda",
        "Ukraine",
        "United Arab Emirates",
        "United Kingdom",
        "United States",
        "Uruguay",
        "Uzbekistan",
        "Vanuatu",
        "Vatican City",
        "Venezuela",
        "Vietnam",
        "Yemen",
        "Zambia",
        "Zimbabwe",
    ];

    const [selectedInitials, setSelectedInitials] = React.useState("");

    function handleInitialsButtonClick(initials) {
        setSelectedInitials(initials);
    }
    function resetSearch() {
        setSelectedInitials("all");
    }

    const mapElement = mapPathObjects.map((mapPath) => (
        <EachCountryMap
            key={mapPath.name}
            countryObj={mapPath}
            onMapHover={onMapHover}
            onMapClick={onCountryClick}
            onMouseLeave={resetMapStyle}
            hoveredCountry={hoveredCountry}
            countryMap={countryMap}
        />
    ));

    function sortCountry(initials) {
        return selectedInitials === "all"
            ? counrtyName
            : counrtyName.filter((country) => country.startsWith(initials));
    }

    return (
        <div className={`map-page ${isSearchBarExpanded ? "expanded" : ""}`}>
            <div className="map-search-bar">
                <button onClick={toggleSearchBar} className="toggle-button">
                    {isSearchBarExpanded
                        ? "Close Search Window"
                        : "Search by Country Name"}
                </button>
                <div className="arrow-container">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="42"
                        viewBox="0 0 24 42"
                        fill="none"
                    >
                        <path
                            id="Vector"
                            d="M20.2001 22.1413V19.8587L0.832105 39.2267C0.201798 39.857 0.201798 40.879 0.832105 41.5093C1.46241 42.1396 2.48434 42.1396 3.11465 41.5093L22.4827 22.1413L23.624 21L22.4827 19.8587L3.11465 0.490675C2.48434 -0.139632 1.46241 -0.139632 0.832105 0.490675C0.201798 1.12098 0.201798 2.14291 0.832105 2.77322L20.2001 22.1413Z"
                            fill="white"
                        />
                    </svg>
                </div>

                <div className="map-search-div">
                    {countryInitials.map((initials) => (
                        <button
                            className="alphabet-button"
                            initials={initials}
                            onClick={() => handleInitialsButtonClick(initials)}
                            style={{
                                color:
                                    selectedInitials === initials
                                        ? "white"
                                        : "",
                                backgroundColor:
                                    selectedInitials === initials
                                        ? "#697D73"
                                        : "",
                            }}
                        >
                            {initials}
                        </button>
                    ))}
                    <button className="all-button" onClick={resetSearch}>
                        All
                    </button>
                </div>
                {selectedInitials && (
                    <div className="map-country-button-div">
                        {sortCountry(selectedInitials).map((country) => (
                            <button
                                className="country-button"
                                onClick={() =>
                                    onCountryClick(country.toLowerCase())
                                }
                            >
                                {country}
                            </button>
                        ))}
                    </div>
                )}
            </div>
            <div className="body-div">
                <div className="text-container">
                    <h1>Interactive with the map</h1>
                    <h1>{hoveredCountry && hoveredCountry.toUpperCase()}</h1>
                </div>
                <div className="map-div">
                    <svg
                        className="world-map-svg"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                        viewBox="0 0 1010 654"
                    >
                        {mapElement}
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default MapPage;
