// This file contains dishes card within each country, under traditional dishes tab.


import React, { useReducer } from "react";
const PropTypes = require("prop-types");


export const DishCard = ({
  dishName = "Dish name",
  dishNameCountry = "Dish name\nfrom CountryName", //Format text\ntext
  dishIntro = "elit, sed do eiusmod tempor incididunt ut labore \nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
  cardType = "Dish name",
  property1,
}) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div
      className={`dish-card ${state.property1}`}
      onMouseLeave={() => {
        dispatch({type: "mouse_leave"});
      }}
      onMouseEnter={() => {
        dispatch({type: "mouse_enter"});
      }}
    >
      <div className="overlap-group">
        {state.property1 === "hover" && (
          <>
            <p className="card-name">
              <span className="text-wrapper">
                {dishName}
                <br />
              </span>
            
              {dishNameCountry.split("\n").map((line, index) => ( //Ensure dishNameCountry always has the format "text\ntext" 
                <span key={index} className={index === 0 ? "span" : "text-wrapper"}>
                  {line}
                </span>
              ))}
            </p>
            <div className="card-text">Learn More &gt;</div>
          </>
        )}
      </div>
      {state.property1 === "default" && (
        <>
          <div className="overlap">
            <div className="div">
              <div className="card-name-2">{dishName}</div>
              <img
                className="card-deco-line"
                alt="Card deco line"
                src="https://c..svg"
              />
            </div>
            <img className="card-img" alt="Card img" src="https://c..png" />
            <p className="card-intro">{dishIntro}</p>
          </div>
          <div className="card-text-2">{cardType}</div>
          <div className="card-indication">&gt;</div>
        </>
      )}

      {state.property1 === "hover" && (
        <>
          <img className="img" alt="Card img" src="https://x.png" />
          <img
            className="card-deco-line-2"
            alt="Card deco line"
            src="https://2.svg"
          />
        </>
      )}
    </div>
  );
};

function reducer(state, action) {
  switch (action.type) {
    case "mouse_enter":
      return {
        ...state,
        property1: "hover",
      };
    case "mouse_leave":
      return {
        ...state,
        property1: "default",
      };
    default:
      return state;
  }
}

DishCard.propTypes = {
  dishName: PropTypes.string,
  dishNameCountry: PropTypes.string,
  dishIntro: PropTypes.string,
  countryName: PropTypes.string,
  cardType: PropTypes.string,
  property1: PropTypes.oneOf(["hover", "default"]),
};

export const PropertyHover = () => {
  return <DishCard property1="hover" />;
};
