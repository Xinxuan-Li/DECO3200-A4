import React from "react";
import DishCard from "./DishCard";
import DishInfo from "./DishInfo";

function DishCardsContainer({ dishes, currentDish, onDishCardClick, onBackButtonClick }) {
    // If one dish is clicked, render the dishInfo, otherwise render the dish cards

    return (
        <section className="page-body-container">
            <button
                className="back-to-dishes-button"
                onClick={onBackButtonClick}
            >
                Click to back to dishes
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
                    <DishInfo dish={currentDish} />
                )}
            </div>
        </section>
    );
}

export default DishCardsContainer;
