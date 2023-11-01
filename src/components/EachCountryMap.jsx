function EachCountryMap({
    countryObj,
    onMapHover,
    onMapClick,
    hoveredCountry,
    onMouseLeave,
}) {
    const defaultStyle = {
        fill: "#697D73",
        stroke: "white",
        strokeWidth: 0.5,
        transition: "fill 0.3s ease, stroke-width 0.3s ease",
    };

    const hoverStyle = {
        fill:
            countryObj.name.length === 2 ? "#5A2424" : `url(#${countryObj.name})`,

        // path should be filled with the country pattern
        stroke: "white",
        strokeWidth: 2,
        cursor: "pointer",
        transition: "fill 0.3s ease, stroke-width 0.3s ease",
    };

    const nonHoverStyle = {
        fill: "#A2AEA8",
        stroke: "white",
        strokeWidth: 0.5,
        transition: "fill 0.3s ease, stroke-width 0.3s ease",
    };

    let style;
    if (hoveredCountry === null) style = defaultStyle;
    else {
        if (hoveredCountry === countryObj.name) style = hoverStyle;
        else style = nonHoverStyle;
    }

    return (
        <>
            <defs>
                <pattern
                    id={countryObj.name}
                    patternUnits="userSpaceOnUse"
                    width="200"
                    height="200"
                >
                    <image
                        href={`./img/${countryObj.name}/pattern.jpg`}
                        x="0"
                        y="0"
                        width="200"
                        height="200"
                    />
                </pattern>
            </defs>
            <path
                style={style}
                name={countryObj.name}
                d={countryObj.d}
                onMouseOver={() => onMapHover(countryObj.name)}
                onMouseLeave={onMouseLeave}
                onClick={() => onMapClick(countryObj.name)}
            ></path>
        </>
    );
}

export default EachCountryMap;
