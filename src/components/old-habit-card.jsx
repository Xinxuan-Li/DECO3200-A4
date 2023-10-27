// This file construct each eating habit cards

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";


export const FlipCard = ({
  backText = "This practice reflects respect for kinship and friendships while promoting social interaction.",
  frontText = "Shared Food: Mexicans typically place food in the center of the table for everyone to share.",
  property1,
  className,
}) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "front",
  });

  return (
    <div
      className={`flip-card ${state.property1} ${className}`}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onClick={() => {
        dispatch("click");
      }}
    >
      <div className="card">
        {state.property1 === "front" && (
          <>
            <div className="text">
              <div className="cat">
                Table
                <br />
                Manner
              </div>
            </div>
            <p className="content">{frontText}</p>
          </>
        )}

        {["back", "hover", "mid-1", "mid-2"].includes(state.property1) && (
          <div className="overlap-group">
            {["back", "mid-1", "mid-2"].includes(state.property1) && <div className="bkg" />}

            {["mid-1", "mid-2"].includes(state.property1) && (
              <>
                <div className="div">
                  <p className="text-wrapper">{frontText}</p>
                  <div className="want-to-know-why">
                    Want to know
                    <br />
                    why?
                  </div>
                </div>
                <img className="vector" alt="Vector" src="/img/vector.svg" />
              </>
            )}

            {["back", "hover"].includes(state.property1) && (
              <div className="text-2">
                <div className="content-2">
                  {state.property1 === "hover" && <p className="p">{frontText}</p>}

                  {state.property1 === "back" && <p className="p">{backText}</p>}
                </div>
                {state.property1 === "hover" && (
                  <div className="want-to-know-why">
                    Want to know
                    <br />
                    why?
                  </div>
                )}
              </div>
            )}

            {state.property1 === "hover" && <img className="img" alt="Vector" src="/img/vector-4.svg" />}
          </div>
        )}
      </div>
    </div>
  );
};

function reducer(state, action) {
  if (state.property1 === "front") {
    switch (action) {
      case "mouse_enter":
        return {
          property1: "hover",
        };
        default:
        return state;
    }
  }

  if (state.property1 === "hover") {
    switch (action) {
      case "mouse_leave":
        return {
          property1: "front",
        };

      case "click":
        return {
          property1: "mid-1",
        };
        default:
        return state;
    }
  }

  return state;
}

FlipCard.propTypes = {
  backText: PropTypes.string,
  frontText: PropTypes.string,
  property1: PropTypes.oneOf(["mid-1", "front", "back", "hover", "mid-2"]),
};

//box.js
export const Box = () => {
    return (
      <div className="box">
        <div className="flip-card-2">
          <FlipCard
            className="property-front"
            frontText="Shared Food: Mexicans typically place food in the center of the table for everyone to share."
            property1="front"
          />
          <FlipCard
            className="property-hover"
            frontText="Shared Food: Mexicans typically place food in the center of the table for everyone to share."
            property1="hover"
          />
          <FlipCard
            className="property-mid"
            frontText="Shared Food: Mexicans typically place food in the center of the table for everyone to share."
            property1="mid-1"
          />
          <FlipCard
            className="flip-card-instance"
            frontText="Shared Food: Mexicans typically place food in the center of the table for everyone to share."
            property1="mid-2"
          />
          <FlipCard
            backText="This practice reflects respect for kinship and friendships while promoting social interaction."
            className="property-back"
            property1="back"
          />
        </div>
      </div>
    );
  };

  //test import { Box, FlipCard } from '/Users/hong-gabin/Desktop/DECO3200_A4/DECO3200-A4/group-project/src/components/EatingHabitCard.js';
