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
      stroke: "white",
      strokeWidth: 2,
      pointerEvents: "visiblePainted",
      cursor: "pointer",
      transition: "fill 0.3s ease, stroke-width 0.3s ease",
    };
  
  
    const nonHoverStyle = {
      fill: "#A2AEA8",
      stroke: "white",
      strokeWidth: 0.5,
      pointerEvents: "visiblePainted",
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
            <image href={`./img/${countryObj.name}/pattern.jpg`} x="0" y="0" width="200" height="200"/>
          </pattern>
        </defs>
        <path
          style={style}
          name={countryObj.name}
          d={countryObj.d}
          onMouseOver={() => onMapHover(countryObj.name)}
          onClick={() => onMapClick(countryObj.name)}
          fill={
            countryObj.name.length === 2 ? "gray" : `url(#${countryObj.name})`
          }
        ></path>
      </>
    );
  }
  
  
  export default EachCountryMap;
  
  
  
  