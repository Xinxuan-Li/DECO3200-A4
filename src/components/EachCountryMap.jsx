function EachCountryMap({
    countryObj,
    onMapHover,
    onMapClick,
    hoveredCountry,
    countryMap,
}) {
    const defaultStyle = {
        fill: "#697D73",
        stroke: "white",
        strokeWidth: 0.5,
        pointerEvents: "visiblePainted",
    };

    const hoverStyle = {
        // path should be filled with the country pattern
        fill: countryObj.name.length === 2 ? "gray" : "red",
        stroke: "white",
        strokeWidth: 0.5,
        pointerEvents: "visiblePainted",
        cursor: "pointer",
    };

    const nonHoverStyle = {
        fill: "#A2AEA8",
        stroke: "white",
        strokeWidth: 0.5,
        pointerEvents: "visiblePainted",
    };

    let style;
    if (hoveredCountry === null) style = defaultStyle;
    else {
        if (hoveredCountry === countryObj.name) style = hoverStyle;
        else style = nonHoverStyle;
    }

    return (
        <path
            style={style}
            name={countryObj.name}
            d={countryObj.d}
            onMouseOver={() => onMapHover(countryObj.name)}
            onClick={() => onMapClick(countryObj.name)}
        ></path>
    );
}

export default EachCountryMap;
