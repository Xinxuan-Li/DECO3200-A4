
// dish: [selectedCountry.name, selectedDIsh.dishName]

function TodayDishCard({ dish, onRandomDishClick }) {
    console.log(dish)
    return (
        <div className="today-dish-card-container" onClick={() => dish && onRandomDishClick(dish[0])}>
            <h1>
                {dish
                    ? dish[1] + " from " + dish[0]
                    : "Press the button to get a random dish"}
            </h1>
        </div>
    );
}

export default TodayDishCard;
