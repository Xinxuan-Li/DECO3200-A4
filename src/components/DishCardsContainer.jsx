import React from "react";
import DishCard from "./DishCard";
import DishInfo from "./DishInfo";

function DishCardsContainer({ dishes, currentDish, onDishCardClick, onBackButtonClick }) {
    // If one dish is clicked, render the dishInfo, otherwise render the dish cards

    return (
        <div className="page-body-container-dish">
            <button
                className="back-to-dishes-button"
                onClick={onBackButtonClick}
            >
                Traditional Dishes
            <div className="back-to-dishes-button-hover"></div>
            </button>
            <div className="cards-container">
                {currentDish === null ? (
                    dishes.map((dish) => {
                        return (
                            <DishCard
                                key={dish.dishName}
                                onDishCardClick={onDishCardClick}
                                dish={dish}
                            />
                        );
                    })
                ) : (
                    <div>
                        <DishInfo dish={currentDish} />
                    </div>
                )}
            </div>
        </div>
    );
}

export default DishCardsContainer;
