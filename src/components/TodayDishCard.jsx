// dish: [selectedCountry.name, selectedDIsh.dishName]

function TodayDishCard({ dish, onRandomDishClick }) {
    console.log(dish);
    return (
        <div
            className="today-dish-card-container"
            onClick={() => dish && onRandomDishClick(dish[0])}
        >
            <button title={dish ? `Click to jump to ${dish[0].toUpperCase()} page` : ''}>
                {dish ? (
                    <>
                        {dish[1]}
                        <span style={{fontWeight: "300"}}> from </span>
                        {dish[0].toUpperCase()}
                    </>
                ) : (
                    "Press the button to get a random dish"
                )}
            </button>
        </div>
    );
}

export default TodayDishCard;
