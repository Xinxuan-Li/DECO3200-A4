import EachCountryMap from "./EachCountryMap";
import mapPathObjects from "./mapPathObjects";
import React from "react";

function MapPage({ onCountryClick, countryMap }) {
    const [hoveredCountry, setHoveredCountry] = React.useState(null);
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
            hoveredCountry={hoveredCountry}
            countryMap={countryMap}
        />
    ));

    return (
        <div className="map-page">
            <svg
                className="world-map-svg"
                xmlns="http://www.w3.org/2000/svg"
                width="1010px"
                height="654"
                onMouseLeave={resetMapStyle}
            >
                {mapElement}
            </svg>
        </div>
    );
}

export default MapPage;
