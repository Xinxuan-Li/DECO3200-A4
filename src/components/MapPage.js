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

    return (
        <div className={`map-page ${isSearchBarExpanded ? "expanded" : ""}`}>
            <div
                className="map-search-bar"
                onClick={toggleSearchBar}
            >
                <button>Search</button>
                {isSearchBarExpanded && (
                    <form
                        className="map-search-form"
                    >
                        <select>A</select>
                    </form>
                )}
            </div>
            <div className="map-div" >
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
    );
}

export default MapPage;
