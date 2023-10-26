import React from "react";

function DishCard({ dish, onDishCardClick }) {
    const [isHovered, setIsHovered] = React.useState(false);

    function handleMouseEnter() {
        setIsHovered(true);
    }

    function handleMouseLeave() {
        setIsHovered(false);
    }

    return (
        <div
            className="dish-card"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => onDishCardClick(dish)}
            style={{border: '1px solid'}}
        >
            {!isHovered ? (
                <>
                    <p className="button-text">{dish.dishName}</p>
                    <img
                        className="dish-card-img"
                        src={dish.dishImages[0]}
                        alt={`${dish.dishName}`}
                    />
                    <svg
                        className="dish-card-line"
                        width="200"
                        height="100"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <line
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="50"
                            stroke="black"
                            stroke-width="2"
                        />
                    </svg>
                    <p className="dish-card-name-in-own-language">
                        {dish.dishNameInOwnLanguage}
                    </p>
                </>
            ) : (
                <>
                    <img
                        className="dish-card-img-hovered"
                        src={dish.dishImages[0]}
                        alt={`${dish.dishName}`}
                    />
                    <svg
                        className="dish-card-line-hovered"
                        width="200"
                        height="100"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <line
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="70"
                            stroke="black"
                            stroke-width="3"
                        />
                    </svg>
                    <p className="button-text">
                        {`${dish.dishName} \n ${dish.dishNameInOwnLanguage}`}
                    </p>
                    <p className="learn-more">Learn More</p>
                </>
            )}
        </div>
    );
}

export default DishCard;
