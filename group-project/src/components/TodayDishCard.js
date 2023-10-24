
function TodayDishCard({ dish }) {
    return (
        <div className="today-dish-card-container">
            <h1>
                {dish
                    ? dish[1].dishName + " from " + dish[0].countryName
                    : "Press the button to get a random dish"}
            </h1>
        </div>
    );
}

export default TodayDishCard;
