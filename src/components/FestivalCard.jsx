// This file constructs festival bars (tabs)
// date, festival name, festival dishes, festival picture,
import React from "react";

function FestivalCard({ festival }) {
    const [isExpanded, setIsExpanded] = React.useState();

    const dayMonthDict = {
        '1': 'January',
        '2': 'February',
        '3': 'March',
        '4': 'April',
        '5': 'May',
        '6': 'June',
        '7': 'July',
        '8': 'August',
        '9': 'September',
        '10': 'October',
        '11': 'November',
        '12': 'December',
    };

    function toggle() {
        setIsExpanded(!isExpanded);
    }

    return (
        <div
            className="festival-card"
            onClick={toggle}
        >
            {!isExpanded ? (
                <>
                    <div className="festival-bar-left">
                        <div className="festival-month-and-date">
                            <h1 className="festival-date">
                                {festival.festivalDate}
                            </h1>
                            <h1 className="festival-month">
                                {dayMonthDict[festival.festivalMonth]}
                            </h1>
                        </div>
                        <h2 className="festival-name">{festival.festivalName}</h2>
                    </div>
                    <img
                        src={festival.festivalImage}
                        className="festival-img"
                        alt="festival"
                    />
                </>
            ) : (
                <>
                    <div className="festival-month-and-date">
                        <h1 className="festival-date">
                            {`${festival.festivalDate} Date`}
                        </h1>
                        <h1 className="festival-month">
                            {`${festival.festivalMonth} Month`}
                        </h1>
                    </div>
                    <h2 className="festival-name">{festival.festivalName}</h2>
                    <img
                        src={festival.festivalImage}
                        className="festival-img"
                        alt="festival"
                    />
                    <div className="festival-dishes-container">
                        {/* pass in dish information and create JSX accoringly */}
                        {festival.festivalDishes.map((dish) => {
                            return (
                                <div className="festival-dish-per-card-container">
                                    <img
                                        src={dish.festivalDishImage}
                                        className="festival-dish-img"
                                        alt={dish.festivalDishName}
                                    />
                                    <p className="festival-dish-name">
                                        {dish.festivalDishName}
                                    </p>
                                    <p className="festival-dish-description">
                                        {dish.festivalDishDescription}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                    <div className="festival-description-container">
                        <h2>Description: </h2>
                        <p className="festival-description">
                            {festival.festivalDescription}
                        </p>
                    </div>
                </>
            )}
        </div>
    );
}

export default FestivalCard;
